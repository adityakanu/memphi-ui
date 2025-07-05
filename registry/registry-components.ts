import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "button",
    type: "registry:ui",
    files: [
      "ui/button.tsx",
    ],
  },
  {
    name: "input",
    type: "registry:ui",
    files: [
      "ui/input.tsx",
    ],
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      "ui/card.tsx",
    ],
  }
];