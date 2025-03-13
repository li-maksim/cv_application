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

  const [schoolInfo, setSchoolInfo] = useState([
    {id: `schoolName${schoolCount}`, name: 'School name', type: 'text'},
    {id: `titleOfStudy${schoolCount}`, name: 'Title of study', type: 'text'},
    {id: `studyStart${schoolCount}`, name: 'Start date', type: 'date'},
    {id: `studyEnd${schoolCount}`, name: 'End Date', type: 'date'},
  ])

  let workCount = 1

  const [workInfo, setWorkInfo] = useState([
    {id: `companyName${workCount}`, name: 'Company name', type: 'text'},
    {id: `positionTitle${workCount}`, name: 'Position Title', type: 'text'},
    {id: `jobStart${workCount}`, name: 'Start date', type: 'date'},
    {id: `jobEnd${workCount}`, name: 'End Date', type: 'date'},
  ])

  const aboutMeInfo = [
    {id: 'aboutMe', type: 'textarea'}
  ]

  function addMoreInputs(e) {
    e.preventDefault()
    if (e.target.id === "add_education") {
      schoolCount++
      setSchoolInfo([
        ...schoolInfo,
        {id: `schoolName${schoolCount}`, name: 'School name', type: 'text'},
        {id: `titleOfStudy${schoolCount}`, name: 'Title of study', type: 'text'},
        {id: `studyStart${schoolCount}`, name: 'Start date', type: 'date'},
        {id: `studyEnd${schoolCount}`, name: 'End Date', type: 'date'}
      ])
    } else {
      workCount++
      setWorkInfo([
        ...workInfo,
        {id: `companyName${workCount}`, name: 'Company name', type: 'text'},
        {id: `positionTitle${workCount}`, name: 'Position Title', type: 'text'},
        {id: `jobStart${workCount}`, name: 'Start date', type: 'date'},
        {id: `jobEnd${workCount}`, name: 'End Date', type: 'date'}
      ])
    }
  }

  function deleteInputs(e) {
    e.preventDefault()
    if (e.target.id === "del_education") {
      const newSchoolInfo = [...schoolInfo]
      let i = 4 
      while (i > 0) {
        newSchoolInfo.pop()
        i--
      }
      setSchoolInfo(newSchoolInfo)
      schoolCount--
    } else {
      const newWorkInfo = [...workInfo]
      let i = 4 
      while (i > 0) {
        newWorkInfo.pop()
        i--
      }
      setWorkInfo(newWorkInfo)
      workCount--
    }
  }

  return (
    <div className="container">
      <section className="edit_section">
            
        <form action="" method="post" className="form" onChange={(e) => handleInputChange(e)}>

          <EditBlock blockName="General information" arr={generalInfo}></EditBlock>
          <EditBlock blockName="Education" arr={schoolInfo}>
            <button className="btn input_block_btn" id="add_education" onClick={(e) => addMoreInputs(e)}>+</button>
            <button className="btn input_block_btn" id="del_education" onClick={(e) => deleteInputs(e)}>-</button>
          </EditBlock>
          <EditBlock blockName="Work experience" arr={workInfo}>
            <button className="btn input_block_btn" id="add_work" onClick={(e) => addMoreInputs(e)}>+</button>
            <button className="btn input_block_btn" id="del_work" onClick={(e) => deleteInputs(e)}>-</button>
          </EditBlock>
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
