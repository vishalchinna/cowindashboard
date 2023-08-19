import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {last7Days: [], byAge: [], byGender: [], loading: apiStatus.initial}

  componentDidMount() {
    this.getVaccineDetails()
  }

  getVaccineDetails = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const updatedData = data.last_7_days_vaccination.map(each => ({
      dose1: each.dose_1,
      dose2: each.dose_2,
      vaccineDate: each.vaccine_date,
    }))
    if (response.ok === true) {
      this.setState({
        last7Days: updatedData,
        loading: apiStatus.success,
        byAge: data.vaccination_by_age,
        byGender: data.vaccination_by_gender,
      })
    } else {
      this.setState({loading: apiStatus.failure})
    }
  }

  renderVaccineDashboard = () => {
    const {last7Days, byAge, byGender} = this.state
    console.log(byGender)
    return (
      <div>
        <VaccinationCoverage data={last7Days} />
        <VaccinationByGender genderData={byGender} />
        <VaccinationByAge ageData={byAge} />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className=""
      />
    </div>
  )

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderResultView = () => {
    const {loading} = this.state
    switch (loading) {
      case apiStatus.initial:
        return this.renderLoading()
      case apiStatus.success:
        return this.renderVaccineDashboard()
      case apiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="logo-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h2 className="logo-head">Co-WIN</h2>
        </div>
        <h1 className="title">CoWIN vaccination in India</h1>
        {this.renderResultView()}
      </div>
    )
  }
}

export default CowinDashboard
