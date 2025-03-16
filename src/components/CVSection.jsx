import '../styles/CVSection.css'
import Icon from '@mdi/react'
import { mdiPhone } from '@mdi/js'
import { mdiEmailOutline } from '@mdi/js'

function CVSection({generalInfo, schools, jobs, hide}) {

    function Name() {
        if (generalInfo.firstName && generalInfo.lastName) {
            return <h2 className="header">{generalInfo.firstName + ' ' + generalInfo.lastName}</h2>
        } else if (generalInfo.firstName && !generalInfo.lastName) {
            return <h2 className="header">{generalInfo.firstName}</h2>
        } else if (!generalInfo.firstName && generalInfo.lastName) {
            return <h2 className="header">{generalInfo.lastName}</h2>
        }
    }

    function Phone() {
        if (generalInfo.phone) {
            return (
                <>
                    <Icon path={mdiPhone} size={1} className="icon" />
                    <p>{generalInfo.phone}</p>  
                </>
            )
        }
    }

    function Email() {
        if (generalInfo.email) {
            return (
                <>
                    <Icon path={mdiEmailOutline} size={1} className="icon" />
                    <p>{generalInfo.email}</p>
                </>
            )
        }
    }

    function Schools() {
        if (schools.length > 0) {
            const schoolBlocks = schools.map((item, index) => {
                return (
                    <div key={item.schoolName + index} className="school_block">
                        <h3>{item.schoolName}</h3>
                        <p>{item.titleOfStudy}</p>
                        <p>
                            {item.studyStart && `From: ${item.studyStart}`}
                            {item.studyEnd && ` To: ${item.studyEnd}`}
                        </p>
                    </div>
                )
            })

            return (
                <>
                    <h2 className="header">Education</h2>
                    {schoolBlocks}
                </>
            )
        }
    }

    function Jobs() {
        if (jobs.length > 0) {
            const jobBlocks = jobs.map((item, index) => {
                return (
                    <div key={item.schoolName + index} className="school_block">
                        <h3>{item.companyName}</h3>
                        <p>{item.positionTitle}</p>
                        <p>
                            {item.jobStart && `From: ${item.jobStart}`}
                            {item.jobEnd && ` To: ${item.jobEnd}`}
                        </p>
                    </div>
                )
            })

            return (
                <>
                <h2 className="header">Work Experience</h2>
                {jobBlocks}
                </>
            )
        }
    }

    function AboutMe() {
        if (generalInfo.aboutMe) {
            return (
                <>
                    <h2 className="header">About Me</h2>
                    <p>{generalInfo.aboutMe}</p>
                </>
            )
        }
    }

    return (
        <section className={hide}>
        <div className="general_info">
            <Name />
            <h3 className="header">{generalInfo.jobTitle}</h3>
            <div className="contact"><Phone /></div>
            <div className="contact"><Email /></div>
        </div>
        <div className="other_info">
            <div className="other_info_block"><Schools /></div>
            <div className="other_info_block"><Jobs /></div>
            <div className="other_info_block"><AboutMe /></div>
        </div>
    </section>
    )
}

export default CVSection