import { useNavigate } from "react-router-dom"
import Logo from '../../Assets/nw_logo.svg';

import "./Header.css"

const Header = () => {
    const navigate = useNavigate()

    return(
        <div className="headerDesign"> 
            <div className="title"> <img src={Logo} alt="NW Logo" className="headerIcon"/>  Geekshub Movies </div>
            <div className="headerLinks">
                <div className="linkDesign" onClick={ () => navigate("/popular") }>Popular</div>
                <div className="linkDesign" onClick={ () => navigate("/search") }>Search</div>
            </div>
        </div>
    )
};

export default Header