import { useState } from 'react'
import '../styles/EditBlock.css'

function EditBlock({children, blockName}) {

    const [isHidden, setIsHidden] = useState("inputs hidden")

    const handleHeaderClick = function() {
        if (isHidden === "inputs hidden" || isHidden === "inputs closed") {
            setIsHidden("inputs opened")
        } else {
            setIsHidden("inputs closed")
        }
    }

    return (
        <div className="edit_block">
            <div className="header_wrapper" onClick={() => handleHeaderClick()}>
                <h2 className="header">{blockName}</h2>
            </div>
            <div className={isHidden}>
                {children}
            </div>
        </div>
    )
}

export default EditBlock