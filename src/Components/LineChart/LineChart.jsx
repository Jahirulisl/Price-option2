import { LineChart as LChart , Line } from 'recharts';
const LineChart = () => {
    const subjectMarksData = [
        
            { id: 1, name: 'Alice', math: 78, physics: 82, chemistry: 75 },
            { id: 2, name: 'Bob', math: 85, physics: 89, chemistry: 80 },
            { id: 3, name: 'Charlie', math: 90, physics: 94, chemistry: 92 },
            { id: 4, name: 'David', math: 76, physics: 78, chemistry: 70 },
            { id: 5, name: 'Eva', math: 88, physics: 84, chemistry: 85 },
            { id: 6, name: 'Frank', math: 92, physics: 91, chemistry: 89 },
            { id: 7, name: 'Grace', math: 84, physics: 86, chemistry: 82 },
            { id: 8, name: 'Hannah', math: 79, physics: 80, chemistry: 76 },
            { id: 9, name: 'Ian', math: 87, physics: 88, chemistry: 84 },
            { id: 10, name: 'Jane', math: 91, physics: 90, chemistry: 88 },
      ];
    

    return (
        <div>
            <LChart width={500} height={400} data={subjectMarksData}>
            <Line dataKey="math"stroke='red'></Line>
            <Line dataKey="physics"stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;
