import './header.css'
import '../../fonts/Fonts.css'
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
        <>
            <div id="header">
                <h1>Solar Trip</h1>
                <div className='Nav'>
                    <ul>
                    <Link to="/"><li>Home</li></Link>
                        <Link to="PlanetInfo"><li>Learn</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/Register"><li>Register</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header