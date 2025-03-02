import Input from './Input.jsx'
import EditBlock from './EditBlock.jsx'
import { useState } from 'react'
import '../styles/EditSection.css'

function EditSection() {

    return (
        <section className="edit_section">
            
            <EditBlock blockName="General information">
                <Input inputID="name_input" inputName="First name"></Input>
                <Input inputID="lastname_input" inputName="Last name: "></Input>
                <Input inputID="phone_input" inputName="Phone: " inputType="phone"></Input>
                <Input inputID="email_input" inputName="Email: " inputType="email"></Input>
            </EditBlock>
            
            <EditBlock blockName="Education">
                <Input inputID="school_input" inputName="School name: "></Input>
                <Input inputID="title_input" inputName="Title of study: "></Input>
                <Input inputID="studystart_input" inputName="Start: " inputType="date"></Input>
                <Input inputID="studyend_input" inputName="End: " inputType="date"></Input> 
            </EditBlock>

            <div className="btns">
                <button className="btn sumbit_btn">Submit</button>
            </div>
        </section>
    )
}

export default EditSection