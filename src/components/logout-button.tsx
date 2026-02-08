"use client";

import { LogOut } from "lucide-react";

export function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem("opendash_auth");
    window.location.reload();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      title="Logout"
    >
      <LogOut className="h-4 w-4" />
      <span className="hidden sm:inline">Logout</span>
    </button>
  );
}
