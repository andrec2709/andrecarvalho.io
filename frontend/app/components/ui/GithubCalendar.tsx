import { useEffect, useRef, useState } from "react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";
import { useTranslation } from "react-i18next";

export default function GithubCalendar() {
    const { t } = useTranslation();
    const calendarRef = useRef<HTMLElement>(null);
    const [data, setData] = useState<Activity[]>([
        { date: '1999-12-12', count: 0, level: 0 },
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /* Fetches the calendar's data */
        const fetchData = async () => {
            const API = import.meta.env.VITE_API_URL;
            const fetched = await fetch(`${API}/application/getContributions.php`);
            let newData: Activity[] = await fetched.json();

            if (newData.length === 0) {
                setLoading(true);
                return;
            }

            newData.sort((a, b) => a.date > b.date ? 1 : -1);
            setData(newData);
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        /* 
        Scrolls to the end of the calendar on load.
        */
        const calendar = calendarRef.current
        if (calendar) {
            const el = calendar.querySelector('[class="react-activity-calendar__scroll-container"]');

            if (el) {
                el.scrollLeft = el.scrollWidth;
            }
        }
    }, [loading]);

    return (
        <ActivityCalendar
            data={data}
            ref={calendarRef}
            loading={loading}
            showMonthLabels
            showTotalCount
            showWeekdayLabels
            showColorLegend
            blockMargin={4}
            blockRadius={2}
            blockSize={11}
            colorScheme="light"
            tooltips={{
                activity: {
                    text: activity => t('githubCalendar.tooltips.activityText', { count: activity.count, date: activity.date }),
                    withArrow: true,
                },
            }}
            labels={{
                legend: {
                    less: t('githubCalendar.labels.legend.less'),
                    more: t('githubCalendar.labels.legend.more'),
                },
                totalCount: t('githubCalendar.labels.totalCount'),
                months: [
                    t('months.jan.abbr'),
                    t('months.feb.abbr'),
                    t('months.mar.abbr'),
                    t('months.apr.abbr'),
                    t('months.may.abbr'),
                    t('months.jun.abbr'),
                    t('months.jul.abbr'),
                    t('months.aug.abbr'),
                    t('months.sep.abbr'),
                    t('months.oct.abbr'),
                    t('months.nov.abbr'),
                    t('months.dec.abbr'),
                ],
                weekdays: [
                    t('weekdays.sun.abbr'),
                    t('weekdays.mon.abbr'),
                    t('weekdays.tue.abbr'),
                    t('weekdays.wed.abbr'),
                    t('weekdays.thu.abbr'),
                    t('weekdays.fri.abbr'),
                    t('weekdays.sat.abbr'),
                ],
            }}
            theme={{
                light: ['var(--gh-calendar-low-color)', 'var(--gh-calendar-high-color)'],
            }}

            style={{
                color: 'var(--gh-calendar-label)',
            }}

        />
    );
}