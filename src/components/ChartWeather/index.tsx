import { FC } from 'react'
import Chart from 'react-apexcharts'

import { convertedLocalDate } from 'utils'
import { useAppSelector } from 'types'

import { ChartWrapper } from './styled'

export const ChartWeather: FC = () => {
  const weatherTemp = useAppSelector(state => state.weather.weatherOnHours!.temp)
  const hours = useAppSelector(state => state.weather.weatherOnHours!.date).map(hour =>
    convertedLocalDate(hour, true),
  )

  const data: any = {
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
        background: {
          enabled: false,
        },
      },
      stroke: {
        curve: 'smooth',
        colors: ['#46c2ff'],
        width: 2,
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
        type: 'numeric ',
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
        max: (weatherTemp: number) => {
          return weatherTemp + 5
        },
        min: (weatherTemp: number) => {
          return weatherTemp - 1
        },
        labels: {
          offsetX: -10,
        },
      },
    },
  }

  return (
    <ChartWrapper>
      <h3>Temperature °C</h3>
      <Chart options={data.options} series={data.series} type='area' height={300} />
    </ChartWrapper>
  )
}
