import { useContext, useLayoutEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import { DarkModeContext } from "../../context/darkmode.context"
import dashboardServices from "../../services/dashboard.service"



const HeaderTitle = ({ headerTitle }) => {

    const [title, setTitle] = useState(headerTitle)
    const [offset, setOffSet] = useState()

    const { user } = useContext(AuthContext)
    const { darkMode } = useContext(DarkModeContext)

    const titleRef = useRef()

    useLayoutEffect(() => {
        if (offset !== undefined && offset > 0) {
            const newRange = document.createRange()
            newRange.setStart(titleRef.current.childNodes[0], offset)

            const selection = document.getSelection()
            selection.removeAllRanges()
            selection.addRange(newRange)
        }
    })



    const handleTitle = e => {
        const range = document.getSelection().getRangeAt(0)
        setOffSet(range.startOffset)

        setTitle(e.target.textContent)
        handleTitleUpdate()
    }

    const handleTitleUpdate = () => {
        dashboardServices
            .getDashboardByUser(user._id)
            .then(res => {
                return dashboardServices.updateHeader(res.data[0]._id, { title })
            })
            .catch(err => console.log({ message: "Internal server error:", err }))
    }

    return (
        <Container>
            <div className={!darkMode ? "headerInput" : "headerInput-dark"} contentEditable suppressContentEditableWarning spellCheck="false" onInput={handleTitle} onBlur={handleTitleUpdate} ref={titleRef}>
                {title}
            </div>
        </Container>

    )
}

export default HeaderTitle