import { differenceInMonths } from "date-fns";

export interface ExperienceInterval {
    startDate: Date;
    endDate: Date;
}

/**
 * Calculates total experience in months, accounting for overlapping periods.
 * Overlapping periods are counted only once.
 */
export function calculateTotalExperienceMonths(intervals: ExperienceInterval[]): number {
    if (intervals.length === 0) return 0;

    // 1. Sort intervals by start date
    const sorted = [...intervals].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    // 2. Merge overlapping intervals
    const merged: ExperienceInterval[] = [];
    let current = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        const next = sorted[i];

        if (next.startDate <= current.endDate) {
            // Overlap: merge by taking the max of end dates
            current = {
                startDate: current.startDate,
                endDate: new Date(Math.max(current.endDate.getTime(), next.endDate.getTime())),
            };
        } else {
            // No overlap: push current and start new
            merged.push(current);
            current = next;
        }
    }
    merged.push(current);

    // 3. Sum total months (adding 1 to each interval to be inclusive of the month)
    return merged.reduce((total, interval) => {
        return total + differenceInMonths(interval.endDate, interval.startDate) + 1;
    }, 0);
}

export function formatExperience(totalMonths: number): { years: number; months: number } {
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    return { years, months: remainingMonths };
}
