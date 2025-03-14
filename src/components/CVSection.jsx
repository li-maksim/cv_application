function CVSection({schools, jobs, hide}) {

    const schoolBlocks = schools.map((item, index) => {
        return (
            <div key={item.schoolName + index} className="school_block">
                <h3>{item.schoolName}</h3>
                <p>{item.titleOfStudy}</p>
                <p>{item.studyStart}</p>
                <p>{item.studyEnd}</p>
            </div>
        )
    })

    const jobBlocks = jobs.map((item, index) => {
        return (
            <div key={item.schoolName + index} className="school_block">
                <h3>{item.companyName}</h3>
                <p>{item.positionTitle}</p>
                <p>{item.jobStart}</p>
                <p>{item.jobEnd}</p>
            </div>
        )
    })

    // console.log(schools)

    return (
        <section className={hide}>
        <div className="general_info">
          DAMN
        </div>
        <div className="other_info">
            {schoolBlocks}
            {jobBlocks}
        </div>
    </section>
    )
}

export default CVSection