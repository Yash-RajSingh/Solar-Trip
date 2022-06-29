import WelcomeContent from '../components/WelcomeContent/WelcomeContent'
import AdBanner from '../components/AdBanner/AdBanner'
import { useEffect } from 'react'

const Home = () => {
    useEffect(()=>{ 
        window.scrollTo({top: 0})
    },[])
    return (<>
        <div >
            <WelcomeContent />
            <AdBanner />
        </div>
    </>)
}
export default Home;