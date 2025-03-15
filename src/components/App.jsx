import { use, useState } from 'react'
import '../styles/App.css'
import EditBlock from './EditBlock.jsx'
import CVSection from './CVSection.jsx'

function App() {


  const [schoolCount, setSchoolCount] = useState(1)
  const [workCount, setWorkCount] = useState(1)

  const generalInfo = [
    {id: 'firstName', name: 'First name', type: 'text'},
    {id: 'lastName', name: 'Last name', type: 'text'},
    {id: 'jobTitle', name: 'Job title', type: 'text'},
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

  function handleInputChange(e) {
    let name = e.target.name
    let val = e.target.value
    setFormData({...formData, [name]: val})
    // console.log(formData)
  }

  const [CVClass, setCVClass] = useState("CV_section hidden")

  const schoolArr = []
  const jobsArr = []
  const [CVData, setCVData] = useState({schools: [], jobs: []})

  function createSchools(obj, n = 1) {
    let name = 'schoolName' + n
    if (!obj[name]) {
        return 
    } else {
        let title = 'titleOfStudy' + n
        let start = 'studyStart' + n
        let end = 'studyEnd' + n
        const item = {
            schoolName: obj[name],
            titleOfStudy: obj[title],
            studyStart: obj[start],
            studyEnd: obj[end]
        }
        schoolArr.push(item)
        createSchools(obj, n + 1)
    }
  }

  function createJobs(obj, n = 1) {
    let name = 'companyName' + n
    if (!obj[name]) {
        return 
    } else {
        let title = 'positionTitle' + n
        let start = 'jobStart' + n
        let end = 'jobEnd' + n
        const item = {
            companyName: obj[name],
            positionTitle: obj[title],
            jobStart: obj[start],
            jobEnd: obj[end]
        }
        jobsArr.push(item)
        createJobs(obj, n + 1)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    schoolArr.length = 0
    jobsArr.length = 0
    createSchools(formData)
    createJobs(formData)
    setCVData({schools: schoolArr, jobs: jobsArr})

    setCVClass("CV_section")
  }

  function handleReset() {
    setFormData({generalInfo, schoolInfo, workInfo, aboutMeInfo})
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
      console.log(formData)

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

      let name = 'schoolName' + schoolCount
      let title = 'titleOfStudy' + schoolCount
      let start = 'studyStart' + schoolCount
      let end = 'studyEnd' + schoolCount

      const newFormData = {...formData, schoolInfo: newSchoolInfo}
      delete newFormData[name]
      delete newFormData[title]
      delete newFormData[start]
      delete newFormData[end]
      setFormData(newFormData)
      setSchoolCount(schoolCount - 1)

    } else {
      const newWorkInfo = [...formData.workInfo]
      let i = 4 
      while (i > 0) {
        newWorkInfo.pop()
        i--
      }

      let name = 'companyName' + workCount
      let title = 'positionTitle' + workCount
      let start = 'jobStart' + workCount
      let end = 'jobEnd' + workCount

      const newFormData = {...formData, workInfo: newWorkInfo}
      delete newFormData[name]
      delete newFormData[title]
      delete newFormData[start]
      delete newFormData[end]
      setFormData(newFormData)
      setSchoolCount(workCount - 1)
    }
  }


  return (
    <div className="container">
      <section className="edit_section">
        <h1 className="header">CV Builder</h1>
        <form action="" method="post" className="form" onChange={(e) => handleInputChange(e)} onReset={() => handleReset()}>

          <EditBlock blockName="General information" arr={formData.generalInfo} componentClass="inputs open"></EditBlock>
          <EditBlock blockName="Education" arr={formData.schoolInfo}>
            <div className="btns">
            <button className="btn input_block_btn" id="add_education" onClick={(e) => addMoreInputs(e)}>+</button>
            <button className="btn input_block_btn" id="del_education" onClick={(e) => deleteInputs(e)}>-</button>
            </div>
          </EditBlock>
          <EditBlock blockName="Work experience" arr={formData.workInfo}>
            <div className="btns">
            <button className="btn input_block_btn" id="add_work" onClick={(e) => addMoreInputs(e)}>+</button>
            <button className="btn input_block_btn" id="del_work" onClick={(e) => deleteInputs(e)}>-</button>
            </div>
          </EditBlock>
          <EditBlock blockName="About Me" arr={[]}>
            <textarea className="input" id="aboutMe" name="aboutMe" rows="20"></textarea>
          </EditBlock>

          <div className="btns">
              <button className="btn bottom_btn" type="reset">Clear</button>
              <button className="btn bottom_btn" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>

        </form>
      </section>

      <CVSection generalInfo={formData} schools={CVData.schools} jobs={CVData.jobs} hide={CVClass}></CVSection>
    </div>
  )
}

export default App
