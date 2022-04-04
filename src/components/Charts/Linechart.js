import React, { useContext } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContext } from '../Dashboard/Dashboard';

const Linechart = () => {
    const [chart, setChart] = useContext(ChartContext)
    return (
        <>
            <h1 className='text-2xl font-bold mb-5 ml-32 text-blue-600 uppercase'>Month wise sell</h1>
            <LineChart width={450} height={300} data={chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey="sell" stroke='#82ca9d' />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend></Legend>
            </LineChart>
        </>
    );
};

export default Linechart;