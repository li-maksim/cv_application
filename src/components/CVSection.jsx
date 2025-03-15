import '../styles/CVSection.css'

function CVSection({generalInfo, schools, jobs, hide}) {

    function Schools() {
        if (schools.length > 0) {
            const schoolBlocks = schools.map((item, index) => {
                return (
                    <div key={item.schoolName + index} className="school_block">
                        <h3>{item.schoolName}</h3>
                        <p>{item.titleOfStudy}</p>
                        <p>From: {item.studyStart} to: {item.studyEnd}</p>
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
                        <p>From: {item.jobStart} to{item.jobEnd}</p>
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
                    <h3>About Me</h3>
                    <p>{generalInfo.aboutMe}</p>
                </>
            )
        }
    }

    function Name() {
        if (generalInfo.firstName && generalInfo.lastName) {
            return <h2 className="header">{generalInfo.firstName + ' ' + generalInfo.lastName}</h2>
        } else if (generalInfo.firstName && !generalInfo.lastName) {
            return <h2 className="header">{generalInfo.firstName}</h2>
        } else if (!generalInfo.firstName && generalInfo.lastName) {
            return <h2 className="header">{generalInfo.lastName}</h2>
        }
    }


    return (
        <section className={hide}>
        <div className="general_info">
            <Name />
            <h3 className="header">{generalInfo.jobTitle}</h3>
            <p className="contact">{generalInfo.phone}</p>
            <p className="contact">{generalInfo.email}</p>
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