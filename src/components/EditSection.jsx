import Input from './Input.jsx'
import { useState } from 'react'
import '../styles/EditSection.css'

function EditSection() {

    const [isHidden, setIsHidden] = useState("form hidden")

    const handleHeaderClick = function() {
        if (isHidden === "form") {
            setIsHidden("form hidden")
        } else {
            setIsHidden("form")
        }
    }

    return (
        <section className="edit_section">
            <div className="edit_block">
                <div className="header_wrapper" onClick={() => handleHeaderClick()}>
                    <h2 className="header">General Information</h2>
                </div>
                <form action="" method="post" className={isHidden}>
                <Input inputID="name_input" inputName="First name"></Input>
                    <Input inputID="lastname_input" inputName="Last name: "></Input>
                    <Input inputID="phone_input" inputName="Phone: " inputType="phone"></Input>
                    <Input inputID="email_input" inputName="Email: " inputType="email"></Input>
                </form>
            </div>
            
            <div className="edit_block">
                <div className="header_wrapper" onClick={() => handleHeaderClick()}>
                    <h2 className="header">Education</h2>
                </div>
                <form action="" method="post" className={isHidden}>
                <Input inputID="name_input" inputName="First name"></Input>
                    <Input inputID="school_input" inputName="School name: "></Input>
                    <Input inputID="title_input" inputName="Title of study: "></Input>
                    <Input inputID="studystart_input" inputName="Start: " inputType="date"></Input>
                    <Input inputID="studyend_input" inputName="End: " inputType="date"></Input>
                </form>
            </div>

            <div className="btns">
                <button className="btn sumbit_btn">Submit</button>
            </div>
        </section>
    )
}

export default EditSection