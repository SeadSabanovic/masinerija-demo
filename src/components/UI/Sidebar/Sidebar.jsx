import "./sidebar.scss";
import logo from "../../../assets/images/solektra.png";
import { ReactComponent as Logout } from "../../../assets/icons/logout.svg";
import { ReactComponent as OpenMenuIcon } from "../../../assets/icons/open-menu.svg";

import Button from "../Button/Button";
import SidebarNavLinks from "./SidebarNavLinks";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarClosed, setSidebarClosed] = useState(false);

  const handleSidebarToggle = () => {
    document.body.classList.toggle("sidebar-closed");
    setSidebarClosed(!sidebarClosed);
  };

  return (
    <aside className="sidebar">
      <OpenMenuIcon className="sidebar__open" />
      <div className="sidebar__header">
        <div className="sidebar__header__logo" onClick={handleSidebarToggle}>
          <img className="sidebar__header__logo__img" src={logo} alt="logo" />
          <h1 className="sidebar__header__logo__text">Solektra</h1>
        </div>
      </div>
      <div className="sidebar__user">
        <h3 className="sidebar__user__name">
          <span className="sidebar__user__name__full">VINKO OKREŠA</span>
          <span className="sidebar__user__name__short">VO</span>
        </h3>
      </div>
      <div className="sidebar__inner">
        <SidebarNavLinks sidebarClosed={sidebarClosed} />
        <div className="sidebar__footer">
          <Button
            variant="text"
            color="warn"
            icon={<Logout />}
            label="Odjava"
          />
        </div>
      </div>
    </aside>
  );
}
