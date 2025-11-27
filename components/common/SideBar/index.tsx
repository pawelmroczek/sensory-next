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

// Menu items.
const items = [
  {
    title: "Temperatura",
    url: "#",
    icon: ThermometerSun,
  },
  {
    title: "Wilgotność",
    url: "#",
    icon: Droplets,
  },
  {
    title: "Nasłonecznienie",
    url: "#",
    icon: Sun,
  },
  {
    title: "CO2",
    url: "#",
    icon: BubblesIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="py-10">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pomiary sensorów</SidebarGroupLabel>
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
