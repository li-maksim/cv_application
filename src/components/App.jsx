import { use, useState } from 'react'
import '../styles/App.css'
import Input from './Input.jsx'
import EditBlock from './EditBlock.jsx'

function App() {


  const [schoolCount, setSchoolCount] = useState(1)
  const [workCount, setWorkCount] = useState(1)

  const generalInfo = [
    {id: 'firstName', name: 'First name', type: 'text'},
    {id: 'lastName', name: 'Last name', type: 'text'},
    {id: 'jobTitle', name: 'Job Title', type: 'text'},
    {id: 'phone', name: 'Phone number', type: 'phone'},
    {id: 'email', name: 'Email', type: 'email'}
  ]

  const schoolInfo = [
    {id: `schoolName${schoolCount}`, name: 'School name', type: 'text'},
    {id: `titleOfStudy${schoolCount}`, name: 'Title of study', type: 'text'},
    {id: `studyStart${schoolCount}`, name: 'Start date', type: 'date'},
    {id: `studyEnd${schoolCount}`, name: 'End Date', type: 'date'},
  ]

  const workInfo = [
    {id: `companyName${workCount}`, name: 'Company name', type: 'text'},
    {id: `positionTitle${workCount}`, name: 'Position Title', type: 'text'},
    {id: `jobStart${workCount}`, name: 'Start date', type: 'date'},
    {id: `jobEnd${workCount}`, name: 'End Date', type: 'date'},
  ]

  const aboutMeInfo = [
    {id: 'aboutMe', type: 'textarea'}
  ]

  const [formData, setFormData] = useState({generalInfo, schoolInfo, workInfo, aboutMeInfo})
  const [backup, setBackup] = useState({generalInfo, schoolInfo, workInfo, aboutMeInfo})

  function handleInputChange(e) {
    let name = e.target.name
    let val = e.target.value
    setFormData({...formData, [name]: val})
    // console.log(formData)
  }

  const [CVClass, setCVClass] = useState("CV_section hidden")

  function handleSubmit(e) {
    e.preventDefault()

    setBackup(formData)
    // console.log(formData)

    setCVClass("CV_section")
  }

  function handleReset(e) {
    e.preventDefault()

    setFormData(backup)
  }

  function addMoreInputs(e) {
    e.preventDefault()
    if (e.target.id === "add_education") {
      const newSchoolInfo = [...formData.schoolInfo]
      newSchoolInfo.push({id: `schoolName${schoolCount + 1}`, name: 'School name', type: 'text'})
      newSchoolInfo.push({id: `titleOfStudy${schoolCount + 1}`, name: 'Title of study', type: 'text'},)
      newSchoolInfo.push({id: `studyStart${schoolCount + 1}`, name: 'Start date', type: 'date'})
      newSchoolInfo.push({id: `studyEnd${schoolCount + 1}`, name: 'End Date', type: 'date'})
      setFormData({
        ...formData,
        schoolInfo: newSchoolInfo
      })
      setSchoolCount(schoolCount + 1)
    } else {
      const newWorkInfo = [...formData.workInfo]
      newWorkInfo.push({id: `companyName${workCount + 1}`, name: 'Company name', type: 'text'})
      newWorkInfo.push({id: `positionTitle${workCount + 1}`, name: 'Position Title', type: 'text'})
      newWorkInfo.push({id: `jobStart${workCount + 1}`, name: 'Start date', type: 'date'})
      newWorkInfo.push({id: `jobEnd${workCount + 1}`, name: 'End Date', type: 'date'})
      setFormData({
        ...formData,
        workInfo: newWorkInfo
      })
      setWorkCount(workCount + 1)
    }
  }

  function deleteInputs(e) {
    e.preventDefault()
    if (e.target.id === "del_education") {
      const newSchoolInfo = [...formData.schoolInfo]
      let i = 4 
      while (i > 0) {
        newSchoolInfo.pop()
        i--
      }
      setFormData({...formData, schoolInfo: newSchoolInfo})
      setSchoolCount(schoolCount - 1)
    } else {
      const newWorkInfo = [...formData.workInfo]
      let i = 4 
      while (i > 0) {
        newWorkInfo.pop()
        i--
      }
      setFormData({...formData, workInfo: newWorkInfo})
      setWorkCount(workCount - 1)
    }
  }

  return (
    <div className="container">
      <section className="edit_section">
            
        <form action="" method="post" className="form" onChange={(e) => handleInputChange(e)} onReset={(e) => handleReset(e)}>

          <EditBlock blockName="General information" arr={formData.generalInfo}></EditBlock>
          <EditBlock blockName="Education" arr={formData.schoolInfo}>
            <button className="btn input_block_btn" id="add_education" onClick={(e) => addMoreInputs(e)}>+</button>
            <button className="btn input_block_btn" id="del_education" onClick={(e) => deleteInputs(e)}>-</button>
          </EditBlock>
          <EditBlock blockName="Work experience" arr={formData.workInfo}>
            <button className="btn input_block_btn" id="add_work" onClick={(e) => addMoreInputs(e)}>+</button>
            <button className="btn input_block_btn" id="del_work" onClick={(e) => deleteInputs(e)}>-</button>
          </EditBlock>
          <EditBlock blockName="About Me" arr={formData.aboutMeInfo}></EditBlock>

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
