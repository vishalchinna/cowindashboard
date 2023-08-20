import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = prop => {
  const {ageData} = prop
  return (
    <div className="bar-chart">
      <h1 className="head-table">Vaccination by Age</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={ageData}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill=" #64c2a6" />
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

export default VaccinationByAge
