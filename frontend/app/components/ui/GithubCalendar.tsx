import { useEffect, useState } from "react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";

export default function GithubCalendar() {
    const [data, setData] = useState<Activity[]>([
        { date: '1999-12-12', count: 0, level: 0 },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const API = import.meta.env.VITE_API_URL;
            const fetched = await fetch(`${API}/application/getContributions.php`);
            let newData: Activity[] = await fetched.json();

            newData.sort((a, b) => a.date > b.date ? 1 : -1);
            newData = newData.filter(activity => activity.count !== 0);
            console.log(newData);
            setData(newData);
        };

        fetchData();
    }, []);

    return (
        <ActivityCalendar
            data={data}
            showMonthLabels
            showTotalCount
            showWeekdayLabels
            showColorLegend
            blockMargin={4}
            blockRadius={2}
            blockSize={11}
            colorScheme="dark"
            tooltips={{
                activity: {
                    text: activity => `${activity.count} activities on ${activity.date}`,
                    withArrow: true,
                },
            }}
            labels={{
                legend: {
                    less: 'less',
                    more: 'more'
                }
            }}
            theme={{
                light: ['#e6ffe9', '#00352f'],
                dark: ['#04110d', '#04ff7e'],
            }}

            style={{
                color: 'white',
            }}

        />

    );
}