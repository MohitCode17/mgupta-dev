import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names intelligently.
 * - Uses clsx to handle conditional classes.
 * - Uses tailwind-merge to avoid duplicate/conflicting Tailwind classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
