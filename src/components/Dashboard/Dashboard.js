import React, { createContext, useEffect, useState } from 'react';
import Areachart from '../Charts/Areachart';
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
        <div className='my-20 mx-32 grid justify-center'>
            <ChartContext.Provider value={[chart, setChart]}>
                <div className='xl:flex xl:gap-16 lg:flex lg:gap-10'>
                    <Linechart></Linechart>
                    <Areachart></Areachart>
                </div>
            </ChartContext.Provider>
        </div>
    );
};

export default Dashboard;