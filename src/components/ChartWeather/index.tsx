import { FC } from 'react'
import Chart from 'react-apexcharts'

import { convertedLocalDate } from 'utils'
import { IChart, useAppSelector } from 'types'

import { ChartLabel, ChartWrapper } from './styled'

export const ChartWeather: FC = () => {
  const weatherTemp = useAppSelector(
    state => state.weather.weatherOnHours!.temp,
  )
  const hours = useAppSelector(
    state => state.weather.weatherOnHours!.date,
  ).map(hour => convertedLocalDate(hour, true))

  const data: IChart = {
    series: [
      {
        name: 't °C',
        data: weatherTemp,
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 'auto',
        parentHeightOffset: 0,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        offsetY: -5,
        style: {
          fontSize: '12px',
          colors: ['#333', '#999'],
        },
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
      },
      tooltip: {
        x: {
          show: false,
        },
        fixed: {
          enabled: true,
        },
      },
      xaxis: {
        type: 'category',
        categories: hours,
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: true,
        max: (weatherTemp: number) => weatherTemp + 5,
        min: (weatherTemp: number) => weatherTemp - 1,
        labels: {
          offsetX: -10,
        },
      },
    },
  }

  return (
    <ChartWrapper>
      <ChartLabel>Temperature, °C</ChartLabel>
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        height={300}
      />
    </ChartWrapper>
  )
}
