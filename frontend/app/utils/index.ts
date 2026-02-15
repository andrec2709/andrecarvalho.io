
export const inRange = (num: number, min: number, max: number) => {
    return Math.min(max, Math.max(num, min)) === num;
};

