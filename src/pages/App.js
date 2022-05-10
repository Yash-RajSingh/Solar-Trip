import Header from '../components/header/header'
import Footer from '../components/footer/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import PlanetInfo from './PlanetInfo'
import RegisterPage from '../components/register/RegisterPage'

export default function App() {
    return (<>
        <Router>
            <Header />
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/PlanetInfo'>
                    <PlanetInfo />
                </Route>
                <Route path='/Register'>
                    <RegisterPage />
                </Route>
            <Footer />
        </Router>
    </>
    )
}
