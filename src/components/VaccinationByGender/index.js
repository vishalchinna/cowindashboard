import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = prop => {
  const {genderData} = prop
  return (
    <div className="bar-chart">
      <h1 className="head-table">Vaccination by Gender</h1>
      <PieChart width={1000} height={300} className="pie-chart">
        <Pie
          cx="70%"
          cy="40%"
          data={genderData}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Other" fill="#2cc6c6" />
          <Cell name="Male" fill="#f54394" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="bottom"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
