import { useNavigate } from "react-router-dom"

import "./Welcome.css"

const Welcome = () => {
    const navigate = useNavigate()

    return(
        <div className="welcomerDesign"> 
            <div className="welcomeTitle"> New Work GeeksHub <br></br> Movies </div>
            <div className="welcomeLinks">
                <div className="welcomeLink" onClick={ () => navigate("/popular") }>Popular</div>
                <div className="welcomeLink" onClick={ () => navigate("/search") }>Search</div>
            </div>
        </div>
    )
}

export default Welcome
