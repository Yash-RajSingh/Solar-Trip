import astronaut from '../../images/astronaut.png'
import '../../fonts/Fonts.css'
import './WelcomeContent.css'


const WelcomeContent = () => {
    return (
        <>
            <div className="Main">
                <div id='ImageWrapper'>
                    <img src={astronaut} />
                </div>
                <div id='MainContentWrapper'>
                    <p>Embark on a astronomical journey. Explore, enjoy and learn</p>
                    <button>Start Exploring!</button>
                </div>
            </div>
        </>
    )
}
export default WelcomeContent