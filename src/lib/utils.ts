import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPlays(plays: number, depth = 0) {
  if (plays >= 1_000_000) {
    return `${(plays / 1000000).toFixed(depth)}M`;
  } else if (plays >= 1000) {
    return `${(plays / 1000).toFixed(depth)}K`;
  }
  return plays.toString();
}
