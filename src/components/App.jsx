import { use, useState } from 'react'
import '../styles/App.css'
import Input from './Input.jsx'
import EditBlock from './EditBlock.jsx'

function App() {

  const [formData, setFormData] = useState({})

  function handleInputChange(e) {
    let name = e.target.name
    let val = e.target.value
    setFormData({...formData, [name]: val})
    // console.log(formData)
  }

  const [CVClass, setCVClass] = useState("CV_section hidden")

  const Info = {}

  function handleSubmit(e) {
    e.preventDefault()

    console.log(formData)

    setCVClass("CV_section")
  }

  const generalInfo = [
    {id: 'firstName', name: 'First name', type: 'text'},
    {id: 'lastName', name: 'Last name', type: 'text'},
    {id: 'jobTitle', name: 'Job Title', type: 'text'},
    {id: 'phone', name: 'Phone number', type: 'phone'},
    {id: 'email', name: 'Email', type: 'email'}
  ]

  let schoolCount = 1

  const schoolInfo = [
    {id: 'schoolName', name: 'School name', type: 'text'},
    {id: 'titleOfStudy', name: 'Title of study', type: 'text'},
    {id: `studyStart${schoolCount}`, name: 'Start date', type: 'date'},
    {id: `studyEnd${schoolCount}`, name: 'End Date', type: 'date'},
  ]

  let jobCount = 1

  const workInfo = [
    {id: 'companyName', name: 'Company name', type: 'text'},
    {id: 'positionTitle', name: 'Position Title', type: 'text'},
    {id: `jobStart${jobCount}`, name: 'Start date', type: 'date'},
    {id: `jobEnd${jobCount}`, name: 'End Date', type: 'date'},
  ]

  const aboutMeInfo = [
    {id: 'aboutMe', type: 'textarea'}
  ]

  return (
    <div className="container">
      <section className="edit_section">
            
        <form action="" method="post" className="form" onChange={(e) => handleInputChange(e)}>

          <EditBlock blockName="General information" arr={generalInfo}></EditBlock>
          <EditBlock blockName="Education" arr={schoolInfo}></EditBlock>
          <EditBlock blockName="Work experience" arr={workInfo}></EditBlock>
          <EditBlock blockName="About Me" arr={aboutMeInfo}></EditBlock>

          <div className="btns">
              <button className="btn cancel_btn" type="reset">Cancel</button>
              <button className="btn sumbit_btn" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>

        </form>
      </section>

      <section className={CVClass}>
          <div className="general_info">
            <h2>{formData.firstName + ' ' + formData.lastName}</h2>
            <p>{formData.jobTitle}</p>
            <h3>Contacts: </h3>
            <p>{formData.phone}</p>
            <p>{formData.email}</p>
          </div>
          <div className="other_info">

          </div>
      </section>
    </div>
  )
}

export default App
