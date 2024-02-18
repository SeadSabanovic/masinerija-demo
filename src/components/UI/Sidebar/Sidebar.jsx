import "./sidebar.scss";
import logo from "../../../assets/images/solektra.png";

export default function Sidebar() {
  const handleSidebarToggle = () => {
    console.log("test");
    document.body.classList.toggle("sidebar-closed");
  };
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <img
          className="sidebar__header__logo"
          src={logo}
          alt="logo"
          onClick={handleSidebarToggle}
        />
      </div>
      <div className="sidebar__inner"></div>
    </aside>
  );
}
