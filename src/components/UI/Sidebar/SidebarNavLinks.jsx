import { ReactComponent as Radnici } from "../../../assets/icons/radnici.svg";
import { ReactComponent as Place } from "../../../assets/icons/cash.svg";
import { ReactComponent as Analitika } from "../../../assets/icons/analitika.svg";
import { ReactComponent as Postavke } from "../../../assets/icons/postavke.svg";
import { ReactComponent as Projekti } from "../../../assets/icons/projekti.svg";
import SidebarNavLink from "./SidebarNavLink";

export default function SidebarNavLinks({ sidebarClosed }) {
  const navLinks = [
    {
      name: "Projekti",
      icon: <Projekti />,
      links: [
        {
          name: "Odobravanje",
        },
        {
          name: "Lista Projekata",
        },
      ],
    },
    {
      name: "Radnici",
      icon: <Radnici />,
    },
    {
      name: "Plaće",
      icon: <Place />,
    },
    {
      name: "Analitika",
      icon: <Analitika />,
    },
    {
      name: "Postavke",
      icon: <Postavke />,
    },
  ];

  return (
    <ul className="sidebar__nav-links">
      {navLinks.map((link, index) => {
        return (
          <SidebarNavLink
            key={index}
            link={link}
            sidebarClosed={sidebarClosed}
          />
        );
      })}
    </ul>
  );
}
