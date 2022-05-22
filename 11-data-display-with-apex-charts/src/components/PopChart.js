import React, { useState } from 'react'
import Chart from 'react-apexcharts'
export const PopChart = () => {
    const [options, setOptions] = useState({
        chart: {
            background: "#f4f4f4",
            foreColor: "#333"
        },
        xaxis: {
            categories: [
                "New York",
                "Los Angeles",
                "Chicago",
                "Houston",
                "Philadelphia",
                "Phoenix",
                "San Antonio",
                "San Diego",
                "Dallas",
                "San Jose"
            ]
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        fill: {
            colors: ["#F44336"]
        },
        dataLabels: {
            enabled: false
        },
    });
    const [series] = useState([{
        name: "Population",
        data: [
            8550405,
            3971883,
            2720546,
            2296224,
            1567442,
            1563025,
            1469845,
            1394928,
            1300092,
            1026908
        ]
    }]);

    const onClickHandler = () => {
        setOptions(prevState => {
            return {
                ...prevState,
                plotOptions: {
                    ...prevState.plotOptions,
                    bar: {
                        ...prevState.plotOptions.bar,
                        horizontal: !prevState.plotOptions.bar.horizontal
                    }
                },
            }
        })
    }

    return (
        <>
            <Chart
                options={options}
                series={series}
                type="bar"
                height="450"
                width="100%"
            />
            <button onClick={onClickHandler} style={{ position: "absolute", left: "50%" }}>Horizontal</button>
        </>

    )
}
