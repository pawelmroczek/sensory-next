import {
  Bubbles,
  BubblesIcon,
  Calendar,
  Droplets,
  Home,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
  Sun,
  ThermometerSun,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SENSOR_ICONS } from "@/types";

// Menu items.
const items = [
  {
    title: "Temperatura",
    url: "#",
    icon: SENSOR_ICONS["temperature"],
  },
  {
    title: "Wilgotność",
    url: "#",
    icon: SENSOR_ICONS["humidity"],
  },
  {
    title: "Nasłonecznienie",
    url: "#",
    icon: SENSOR_ICONS["sunlight"],
  },
  {
    title: "CO2",
    url: "#",
    icon: SENSOR_ICONS["co2"],
  },
];

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-10">GreenHouse Simulator</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={"#"}>
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Rodzaje sensorów</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
