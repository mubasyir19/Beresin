import { MenuItem } from "@/types";
import {
  Squares2X2Icon,
  QueueListIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";

export const listMenuItems: MenuItem[] = [
  { text: "Dashboard", href: "/dashboard", icon: Squares2X2Icon },
  { text: "Project", href: "/dashboard/project", icon: FolderOpenIcon },
  { text: "My Task", href: "/dashboard/task", icon: QueueListIcon },
];

export const projectMembersExample = [
  {
    id: "1",
    name: "Alice Smith",
    colorsPhoto: "red",
  },
  {
    id: "2",
    name: "Bob Johnson",
    colorsPhoto: "green",
  },
  {
    id: "3",
    name: "Charlie Brown",
    colorsPhoto: "cyan",
  },
  {
    id: "4",
    name: "Diana Prince",
    colorsPhoto: "violet",
  },
  { id: "5", name: "Eve Adams", colorsPhoto: "pink" },
  {
    id: "6",
    name: "Frank White",
    colorsPhoto: "rose",
  },
  { id: "7", name: "Grace Hall", colorsPhoto: "amber" },
];

export const listProjects = [
  {
    name: "Projek 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio qui neque veniam illo minus doloremque repellendus sed vero ullam.",
    status: "NOT_STARTED",
    priority: "High",
    progress: 75,
    totalTask: 40,
    taskProgress: 30,
    members: [
      projectMembersExample[0],
      projectMembersExample[1],
      projectMembersExample[2],
      projectMembersExample[3],
      projectMembersExample[4],
    ],
  },
  {
    name: "Projek 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio qui neque veniam illo minus doloremque repellendus sed vero ullam.",
    status: "IN_PROGRESS",
    priority: "Low",
    progress: 50,
    totalTask: 10,
    taskProgress: 5,
    members: [projectMembersExample[0], projectMembersExample[1]],
  },
  {
    name: "Projek 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio qui neque veniam illo minus doloremque repellendus sed vero ullam.",
    status: "ON_HOLD",
    priority: "Medium",
    progress: 50,
    totalTask: 10,
    taskProgress: 5,
    members: [
      projectMembersExample[0],
      projectMembersExample[1],
      projectMembersExample[2],
      projectMembersExample[3],
    ],
  },
  {
    name: "Projek 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio qui neque veniam illo minus doloremque repellendus sed vero ullam.",
    status: "COMPLETED",
    priority: "High",
    progress: 50,
    totalTask: 10,
    taskProgress: 5,
    members: [
      projectMembersExample[0],
      projectMembersExample[1],
      projectMembersExample[2],
      projectMembersExample[3],
      projectMembersExample[4],
    ],
  },
  {
    name: "Projek 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio qui neque veniam illo minus doloremque repellendus sed vero ullam.",
    status: "COMPLETED",
    priority: "High",
    progress: 50,
    totalTask: 10,
    taskProgress: 5,
    members: [
      projectMembersExample[0],
      projectMembersExample[1],
      projectMembersExample[2],
      projectMembersExample[3],
      projectMembersExample[4],
    ],
  },
  {
    name: "Projek 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio qui neque veniam illo minus doloremque repellendus sed vero ullam.",
    status: "ON_HOLD",
    priority: "Low",
    progress: 50,
    totalTask: 10,
    taskProgress: 5,
    members: [projectMembersExample[0], projectMembersExample[1]],
  },
];
