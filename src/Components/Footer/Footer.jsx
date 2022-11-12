import "./Footer.css"
import Logo from '../../Assets/nw_logo.svg';

const Footer = () => {
    return(
        <div className="footerDesign"> 
            <div className="footerText"> Raúl Sisteré - New Work SE </div>
            <img src={Logo} alt="NW Logo" className="footerIcon"/>
        </div>
    )
};

export default Footer