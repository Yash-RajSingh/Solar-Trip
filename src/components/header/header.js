import './header.css'
import '../../fonts/Fonts.css'

const Header = () =>{
    return(
        <>
            <div id="header">
                <h1>Solar Trip</h1>
                <div className='Nav'>
                    <ul>
                        <li>Learn</li>
                        <li>About</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header