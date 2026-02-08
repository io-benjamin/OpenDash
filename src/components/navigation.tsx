"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Bot } from "lucide-react";

const tabs = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agents", label: "Sub-Agents", icon: Bot },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 bg-muted/50 p-1 rounded-lg">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href || 
          (tab.href !== "/" && pathname.startsWith(tab.href));
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
