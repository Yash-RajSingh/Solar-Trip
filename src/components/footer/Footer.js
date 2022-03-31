import PopImg from '../../images/popup2.jpg'
import './Footer.css'

export default function Footer(){
    return(
        <>
        <div id="FooterWrapper">
            <div className="PopUp">
                <img src={PopImg} />
            </div>
            <div className='FooterElements'>
                <h4>© Solar Trip</h4>
                <div className='FooterMid'>
                    <ul>
                        <li>Index</li>
                        <li>Learn</li>
                        <li>About</li>
                        <li>Register</li>
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