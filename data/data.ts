import { CarouselInterface, NavigationMenuInterface } from "@/types/types";

export const navigationMenuData: NavigationMenuInterface[] = [
  {
    id: 1,
    title: "Features",
    href: "/features",
  },
  {
    id: 2,
    title: "Downloads",
    href: "/mineral-rolls-data",
  },
  {
    id: 3,
    title: "Our Story",
    href: "/our-story",
  },
  {
    id: 4,
    title: "Knowledge Center",
    href: "/knowledge-center",
    dropdown: [
      {
        id: 1,
        title: "Blogs",
        href: "/blogs",
      },
      {
        id: 2,
        title: "Glossary",
        href: "/glossary",
      },
      {
        id: 3,
        title: "Podcasts",
        href: "/podcasts",
      },
    ],
  },
  {
    id: 5,
    title: "Plans & Packages",
    href: "/plans-packages",
  },
  {
    id: 6,
    title: "Operators",
    href: "/oil-and-gas-companies",
  },
];

export const carouselData: CarouselInterface[] = [
  {
    id: 1,
    title: "Title 1",
    description: "",
    image:
      "https://res.cloudinary.com/mineralview/image/upload/db%20website/Receive-the-Latest-Activity-Updates.webp",
    href: "#",
  },
  {
    id: 2,
    title: "Title 2",
    description: "",
    image:
      "https://res.cloudinary.com/mineralview/image/upload/db%20website/Connect-with-Mineral-Owners.webp",
    href: "#",
  },
  {
    id: 3,
    title: "Title 3",
    description: "",
    image:
      "https://res.cloudinary.com/mineralview/image/upload/db%20website/New-Oil-and-Gas-Well-Drilling-Chances.webp",
    href: "#",
  },
  {
    id: 4,
    title: "Title 1",
    description: "",
    image:
      "https://res.cloudinary.com/mineralview/image/upload/db%20website/Forecast-Oil-and-Gas-Production.webp",
    href: "#",
  },
  {
    id: 5,
    title: "Title 2",
    description: "",
    image:
      "https://res.cloudinary.com/mineralview/image/upload/db%20website/Get-the-Appropriate-Mineral-Data.webp",
    href: "#",
  },
  {
    id: 6,
    title: "Title 3",
    description: "",
    image:
      "https://res.cloudinary.com/mineralview/image/upload/db%20website/Know-the-True-Lease-Worth.webp",
    href: "#",
  },
  {
    id: 7,
    title: "Title 3",
    description: "",
    image:
      "https://res.cloudinary.com/mineralview/image/upload/db%20website/Get-Your-Well-Location.webp",
    href: "#",
  },
];
