"use client";
import { useState } from "react";

interface AsideBarProps {
  children: React.ReactNode;
}

const AsideBar: React.FC<AsideBarProps> = ({ children }) => {
  const [open, setOpen] = useState(true);

  function handleClickMenu() {}
  return (
    <aside className="hidden sm:flex px-3 py-2 h-screen">{children}</aside>
  );
};

export default AsideBar;
