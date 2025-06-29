
interface Category {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    image: "/assets/Group1.png",
    title: "Calculated Weather",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    image: "/assets/Group 51.png",
    title: "Best Flights",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    image: "/assets/Group2.png",
    title: "Local Events",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    id: 4,   
    image: "/assets/Group3.png",
    title: "Customization",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
  }
];