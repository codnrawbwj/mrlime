import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInt(rangeMax: number) {
  return Math.floor(Math.random() * rangeMax);
}

export function toSlug(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export function toUnSlug(text: string) {
  return text
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
