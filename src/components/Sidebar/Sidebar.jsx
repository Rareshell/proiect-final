import "./Sidebar.css";
import AddNewCard from "../AddNewCard/AddNewCard";

export default function Sidebar({ addPoster }) {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Share your experience</span>
        <img
          className="sidebarImg"
          src="https://images.unsplash.com/photo-1559385301-0187cb6eff46?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p>Have you worked for your dream today?</p>
      </div>
      <div className="sidebarItem">
        <AddNewCard addPoster={addPoster} />
      </div>
    </div>
  );
}
