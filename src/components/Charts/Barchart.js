import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContext } from '../Dashboard/Dashboard';

const Barchart = () => {
    const [chart] = useContext(ChartContext)
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5 ml-32 text-blue-600 uppercase'>Investment vs Revenue</h1>
            <BarChart
                width={600}
                height={400}
                data={chart}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                <Bar dataKey="revenue" fill="#ffc658" />
            </BarChart>
        </div>
    );
};

export default Barchart;