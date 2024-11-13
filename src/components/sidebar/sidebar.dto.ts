import {
  Frame,
  Guitar,
  ListMusic,
  Map,
  PieChart,
  Settings2,
  Users,
} from "lucide-react";

export const sidebarData = {
  user: {
    name: "vanit",
    email: "vanityadav08@gmail.com",
    avatar: "/user.png",
  },
  navMain: [
    {
      title: "Library",
      icon: ListMusic,
      isActive: true,
      items: [
        {
          title: "Trending",
        },
        {
          title: "Pending",
        },
        {
          title: "Approved",
        },
      ],
    },
    {
      title: "Artists",
      icon: Guitar,
      items: [
        {
          title: "Top Artists",
        },
        {
          title: "Payments",
        },
        {
          title: "Banned",
        },
      ],
    },
    {
      title: "Users",
      icon: Users,
      items: [
        {
          title: "Top Charts",
        },
        {
          title: "Subscriptions",
        },
        {
          title: "Quota",
        },
        {
          title: "Streams",
        },
      ],
    },
    {
      title: "Settings",
      icon: Settings2,
      items: [
        {
          title: "General",
        },
        {
          title: "Team",
        },
        {
          title: "Revenue",
        },
        {
          title: "Limits",
        },
      ],
    },
  ],

  revenue: [
    {
      name: "Discover",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      icon: PieChart,
    },
    {
      name: "Global Operations",
      icon: Map,
    },
  ],
};
