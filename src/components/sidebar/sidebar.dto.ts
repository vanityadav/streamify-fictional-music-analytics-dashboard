import {
  Frame,
  Guitar,
  ListMusic,
  Map,
  PieChart,
  Settings2,
  Users,
} from "lucide-react";

export const mainNav = [
  {
    title: "Library",
    icon: ListMusic,
    items: [
      {
        title: "Trending",
        href: "/library/trending",
      },
      {
        title: "Pending",
        href: "/library/pending",
      },
      {
        title: "Approved",
        href: "/library/approved",
      },
    ],
  },
  {
    title: "Artists",
    icon: Guitar,
    items: [
      {
        title: "Top Artists",
        href: "/artists/top-artists",
      },
      {
        title: "Payments",
        href: "/artists/payments",
      },
      {
        title: "Banned",
        href: "/artists/banned",
      },
    ],
  },
  {
    title: "Users",
    icon: Users,
    items: [
      {
        title: "Top Charts",
        href: "/users/top-charts",
      },
      {
        title: "Subscriptions",
        href: "/users/subscriptions",
      },
      {
        title: "Quota",
        href: "/users/quota",
      },
      {
        title: "Streams",
        href: "/users/streams",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings2,
    items: [
      {
        title: "General",
        href: "/settings/general",
      },
      {
        title: "Team",
        href: "/settings/team",
      },
      {
        title: "Revenue",
        href: "/settings/revenue",
      },
      {
        title: "Limits",
        href: "/settings/limits",
      },
    ],
  },
];

export const revenue = [
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
];

export const user = {
  name: "vanit",
  email: "vanityadav08@gmail.com",
  avatar: "/user.png",
};
