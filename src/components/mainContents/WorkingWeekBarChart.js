import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import worktime from '../../data/worktime.js';

const WorkingWeekBarChart = () => {
    const workingdata = worktime.map((item) => {
        return {
            date: item.date.getDate(),
            total: item.worktime 
                    ? ((item.quittingtime.getTime() - item.worktime.getTime()) / (1000*60*60) -1).toFixed(2)
                    : null
        }
    })

    return (
        <div style={{ width: '70vw', height: '100%'}}>
            <ResponsiveBar
                data = {workingdata}
                keys={['total']}
                indexBy="date"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors={'#A2D3FF'}
                theme={{
                    labels: {
                        text: {
                            fontSize: 14,
                        },
                    
                    }
                }}
            />
        </div>
    );
};

export default WorkingWeekBarChart;