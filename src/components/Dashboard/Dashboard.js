import React, { createContext, useEffect, useState } from 'react';
import Areachart from '../Charts/Areachart';
import Barchart from '../Charts/Barchart';
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
        <div className='mx-20 grid justify-center gap-10'>
            <ChartContext.Provider value={[chart, setChart]}>
                <Linechart></Linechart>
                <Areachart></Areachart>
                <Barchart></Barchart>
            </ChartContext.Provider>
        </div>
    );
};

export default Dashboard;