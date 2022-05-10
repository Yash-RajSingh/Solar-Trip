import PopImg from '../../images/popup2.jpg'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div id="FooterWrapper">
                <div className="PopUp">
                    <img src={PopImg} />
                </div>
                <div className='FooterElements'>
                    <h4>© Solar Trip</h4>
                    <div className='FooterMid'>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="PlanetInfo"><li>Learn</li></Link>
                            <Link to="/about"><li>About</li></Link>
                            <Link to="/Register"><li>Register</li></Link>
                        </ul>
                    </div>
                    <p>
                        By:- <a href="https://github.com/Yash-RajSingh">Yash Raj Singh</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;