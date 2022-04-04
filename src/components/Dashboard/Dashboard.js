import React, { createContext, useEffect, useState } from 'react';
import Linechart from '../Charts/Linechart';

export const ChartContext = createContext()

const Dashboard = () => {
    const [chart, setChart] = useState([])

    useEffect(() => {
        fetch('chart.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div className='lg:mx-40 mx-10 my-10'>
            <ChartContext.Provider value={[chart, setChart]}>
                <Linechart></Linechart>
            </ChartContext.Provider>
        </div>
    );
};

export default Dashboard;