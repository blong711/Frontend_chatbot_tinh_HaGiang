import { SidebarMenuInterFace } from "@/Type/Sidebar";
import { HomeSvg } from "../../svgIcons";

export const SidebarMenu: SidebarMenuInterFace[] = [
  {
    menutitle: "General",
    items: [
      {
        title: "Sample Page",
        icon: <HomeSvg />,
        pathSlice: "samplepage",
        type: "sub",
        active: false,
        items: [{ path: `/samplepage`, title: "Sample Page", type: "link" }],
      },
    ],
  },
  {
    menutitle: "Support",
    items: [
      {
        title: "Support Ticket",
        icon: <HomeSvg />,
        pathSlice: "supportticket",
        type: "sub",
        active: false,
        items: [{ path: `/supportticket`, title: "Support Ticket", type: "link" }],
      },
    ],
  },
];
