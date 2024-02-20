import { Collapse, Menu, MenuItem, Paper } from "@mui/material";
import { useState } from "react";
import { ReactComponent as DropdownIcon } from "../../../assets/icons/dropdown-arrow.svg";

export default function SidebarNavLink({ link, sidebarClosed }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [expand, setExpand] = useState(false);

  const handleClick = (event) => {
    if (!sidebarClosed) {
      setExpand(!expand);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {link.links ? (
        <>
          <li
            className={`sidebar__nav-links__link ${
              true ? "sidebar__nav-links__link--active" : ""
            }`}
            onClick={handleClick}
          >
            {link.icon}
            <span className="sidebar__nav-links__link__name">{link.name}</span>
            <div
              className={`sidebar__nav-links__link__dropdown-icon ${
                expand ? "sidebar__nav-links__link__dropdown-icon--open" : ""
              }`}
            >
              <DropdownIcon />
            </div>
          </li>
          {link.links && (
            <Collapse
              in={expand && !sidebarClosed}
              timeout="auto"
              unmountOnExit
            >
              {link.links.map((subLink, index) => (
                <li key={index} className="sidebar__nav-links__sub-link">
                  {subLink.name}
                </li>
              ))}
            </Collapse>
          )}
        </>
      ) : (
        <li className="sidebar__nav-links__link">
          {link.icon}
          <span className="sidebar__nav-links__link__name">{link.name}</span>
        </li>
      )}
      {sidebarClosed && link.links && (
        <Menu
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          slotProps={{
            paper: {
              style: {
                marginLeft: "9px",
                boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.04)",
              },
            },
          }}
        >
          {link.links.map((subLink, index) => (
            <MenuItem disableRipple key={index} onClick={handleCloseMenu}>
              {subLink.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}
