import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContext } from '../Dashboard/Dashboard';

const Areachart = () => {
    const [chart, setChart] = useContext(ChartContext)
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5 ml-32 text-blue-600 uppercase'>Investment vs Revenue</h1>
            <AreaChart
                width={500}
                height={400}
                data={chart}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </div>
    );
};

export default Areachart;