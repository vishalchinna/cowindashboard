import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = prop => {
  const {data} = prop
  const dataFormat = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="bar-chart">
      <h1 className="head-table">Vaccination coverage</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{top: 0}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokewidth: 1}}
          />
          <YAxis tickFormatter={dataFormat} tick={{stroke: 'grey'}} />
          <Legend wrapStyle={{padding: 30}} />
          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="10%" />
          <Bar dataKey="dose2" name="Dose 2" fill=" #f54394" barSize="10%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
