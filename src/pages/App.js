import Header from '../components/header/header'
import WelcomeContent from '../components/WelcomeContent/WelcomeContent'
import AdBanner from '../components/AdBanner/AdBanner'
import Footer from '../components/footer/Footer'
import Planet from '../components/planets/planets'
import PlanetsData from '../data/PlanetsData.json'
import './App.css'

export default function App() {
    return (
    <div>
        <Header />
        <WelcomeContent />
        <Planet data={PlanetsData} />
        <AdBanner />
        <Footer />
    </div>
    )
}
