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


  return (
    <div className="container">
      <section className="edit_section">
            
        <form action="" method="post" className="form" onChange={(e) => handleInputChange(e)}>
          <EditBlock blockName="General information">
              <Input inputID="firstName" inputName="First name "></Input>
              <Input inputID="lastName" inputName="Last name "></Input>
              <Input inputID="jobTitle" inputName="Job title"></Input>
              <Input inputID="phone" inputName="Phone " inputType="phone"></Input>
              <Input inputID="email" inputName="Email " inputType="email"></Input>
          </EditBlock>
          
          <EditBlock blockName="Education">
              <Input inputID="school_input" inputName="School name "></Input>
              <Input inputID="title_input" inputName="Title of study "></Input>
              <Input inputID="studystart_input" inputName="Start Date " inputType="date"></Input>
              <Input inputID="studyend_input" inputName="End Date " inputType="date"></Input> 
          </EditBlock>

          <EditBlock blockName="Work experience">
              <Input inputID="company_input" inputName="Company name "></Input>
              <Input inputID="position_input" inputName="Position title "></Input>
              <Input inputID="jobstart_input" inputName="Start Date " inputType="date"></Input>
              <Input inputID="jobyend_input" inputName="End Date " inputType="date"></Input> 
          </EditBlock>

          <EditBlock blockName="About me">
              <Input inputID="aboutme_input" inputName="" inputType="textarea"></Input>
          </EditBlock>

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
