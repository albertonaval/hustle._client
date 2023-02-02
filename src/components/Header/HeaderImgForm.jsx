import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import { DarkModeContext } from "../../context/darkmode.context"
import dashboardServices from "../../services/dashboard.service"
import uploadServices from "../../services/upload.service"

const HeaderImgForm = ({ setHeaderData, setShowHeaderModal }) => {
    const [headerImg, setHeaderImg] = useState({
        header: {
            image: "",
        },
    })
    const [loadingImage, setLoadingImage] = useState(false)


    const { user } = useContext(AuthContext)
    const { darkMode } = useContext(DarkModeContext)

    const handleFileUpload = e => {
        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadSingleFile(formData)
            .then(res => {
                setHeaderImg({ image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => console.log({ message: "Internal server error:", err }))
    }

    const handleImageSubmit = e => {
        e.preventDefault()

        dashboardServices
            .getDashboardByUser(user._id)
            .then(res => {

                return dashboardServices.updateHeader(res.data[0]._id, headerImg)
            })
            .then(res => {
                setHeaderImg({ image: res.data.cloudinary_url })
                setShowHeaderModal(false)
                setHeaderData(res.data)
            })
            .catch(err => console.log({ message: "Internal server error:", err }))
    }



    return (
        <Form onSubmit={handleImageSubmit}>
            <Form.Group controlId="image">
                <Form.Control type="file" placeholder="Select an image..." onChange={handleFileUpload} className={darkMode && "form-control-dark"} />
            </Form.Group>

            <Button type="submit" className="btn btn-dark px-5 mt-3" style={{ maxWidth: "max-content", marginInline: "auto" }} disabled={loadingImage}>
                {loadingImage ? 'Uploading...' : 'Submit'}
            </Button>
        </Form>
    )

}

export default HeaderImgForm