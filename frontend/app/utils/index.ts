import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const inRange = (num: number, min: number, max: number) => {
    return Math.min(max, Math.max(num, min)) === num;
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}