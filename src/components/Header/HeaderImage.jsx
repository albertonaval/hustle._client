import { useContext, useState } from "react"
import { Modal } from "react-bootstrap"
import { DarkModeContext } from "../../context/darkmode.context"
import HeaderImgForm from "./HeaderImgForm"

const HeaderImage = ({ headerImage, setHeaderData }) => {
    const [showIcon, setShowIcon] = useState(false)
    const [showHeaderModal, setShowHeaderModal] = useState(false)

    const { darkMode } = useContext(DarkModeContext)


    const handleMouseOver = () => setShowIcon(true)
    const handleMouseOut = () => setShowIcon(false)

    const openHeaderModal = () => setShowHeaderModal(true)
    const closeHeaderModal = () => setShowHeaderModal(false)




    return (
        <>
            <div>
                {showIcon && (
                    <button onMouseOver={handleMouseOver} onClick={openHeaderModal} onMouseOut={handleMouseOut} className="headerImageButton" >
                        <i className="bi bi-image"></i>
                    </button>
                )}
                <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={headerImage} alt="Cover Header" className="headerImg" />
            </div>
            <Modal show={showHeaderModal} onHide={closeHeaderModal} className={darkMode && "modal-dark"}>
                <Modal.Header closeButton>
                    <Modal.Title>Change header image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <HeaderImgForm setHeaderData={setHeaderData} setShowHeaderModal={setShowHeaderModal} />
                </Modal.Body>
            </Modal>
        </>
    )


}

export default HeaderImage