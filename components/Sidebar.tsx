import { FC } from "react";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 bg-card p-4 fixed top-0 left-0 h-full shadow-lg`}
    >
      <h2 className="text-xl text-white">Admin Dashboard</h2>
      {/* Add sidebar navigation links or items here */}
    </div>
  );
};

export const SidebarToggle: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className="lg:hidden p-2 bg-primary text-white rounded-full"
      onClick={onClick}
    >
      <span className="material-icons">menu</span>
    </button>
  );
};
