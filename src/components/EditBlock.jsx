import { useState } from 'react'
import '../styles/EditBlock.css'

function EditBlock({children, blockName}) {

    const [isHidden, setIsHidden] = useState("form hidden")

    const handleHeaderClick = function() {
        if (isHidden === "form hidden" || isHidden === "form closed") {
            setIsHidden("form opened")
        } else {
            setIsHidden("form closed")
        }
    }

    return (
        <div className="edit_block">
            <div className="header_wrapper" onClick={() => handleHeaderClick()}>
                <h2 className="header">{blockName}</h2>
            </div>
            <form action="" method="post" className={isHidden}>
                {children}
            </form>
        </div>
    )
}

export default EditBlock