import Header from '../components/header/header'
import WelcomeContent from '../components/WelcomeContent/WelcomeContent'
import Planet from '../components/planets/planets'
import PlanetsData from '../data/PlanetsData.json'
import './App.css'



export default function App() {
    return (
    <div>
        <Header />
        <WelcomeContent />
        <Planet data = {PlanetsData} />
        
    </div>
    )
}
