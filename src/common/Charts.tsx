import { BarChart } from '@mui/x-charts/BarChart'

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[{ data: [35, 44, 24, 34] }]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  )
}
