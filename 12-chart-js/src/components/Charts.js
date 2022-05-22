import React, { useState } from 'react'
import { Chart } from 'react-chartjs-2'

export const Charts = (props) => {
    const [chartData, setChartData] = useState(props.chartData);
    console.log(props.chartData)
    return (
        <div>
            <Chart
                type="bar"
                data={chartData}
                options={{
                    title: {
                        display: props.displayTitle,
                        text: 'Largest Cities In ' + props.location,
                        fontSize: 25
                    },
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition
                    }
                }}
            />
            {/* <Line
                data={chartData}
                options={{
                    title: {
                        display: props.displayTitle,
                        text: 'Largest Cities In ' + props.location,
                        fontSize: 25
                    },
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition
                    }
                }}
            /> */}

            {/* <Pie
                data={chartData}
                options={{
                    title: {
                        display: props.displayTitle,
                        text: 'Largest Cities In ' + props.location,
                        fontSize: 25
                    },
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition
                    }
                }}
            /> */}
        </div>
    )
}
