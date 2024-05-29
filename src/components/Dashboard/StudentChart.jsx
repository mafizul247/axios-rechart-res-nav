import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StudentChart = () => {

    const data = [
        {
            id: 1,
            name: "Alice Johnson",
            math: 85,
            english: 78,
            physics: 92
        },
        {
            id: 2,
            name: "Bob Smith",
            math: 90,
            english: 88,
            physics: 95
        },
        {
            id: 3,
            name: "Charlie Brown",
            math: 76,
            english: 64,
            physics: 80
        },
        {
            id: 4,
            name: "Diana Prince",
            math: 89,
            english: 92,
            physics: 94
        },
        {
            id: 5,
            name: "Edward Green",
            math: 65,
            english: 70,
            physics: 72
        },
        {
            id: 6,
            name: "Fiona White",
            math: 78,
            english: 80,
            physics: 85
        },
        {
            id: 7,
            name: "George Miller",
            math: 92,
            english: 91,
            physics: 90
        },
        {
            id: 8,
            name: "Hannah Wilson",
            math: 55,
            english: 60,
            physics: 58
        },
        {
            id: 9,
            name: "Ian Clark",
            math: 80,
            english: 85,
            physics: 82
        },
        {
            id: 10,
            name: "Jane Doe",
            math: 88,
            english: 87,
            physics: 90
        },
        {
            id: 11,
            name: "Kyle Adams",
            math: 70,
            english: 75,
            physics: 78
        },
        {
            id: 12,
            name: "Lily Evans",
            math: 95,
            english: 93,
            physics: 97
        }
    ];

    return (
        <div className='mx-24 my-8'>
            <h2>Students Dashboard</h2>
            <LineChart
                width={500}
                height={300}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="math" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="english" stroke="#82ca9d" />
                <Line type="monotone" dataKey="physics" stroke="#375608" />
            </LineChart>
        </div>
    );
};

export default StudentChart;