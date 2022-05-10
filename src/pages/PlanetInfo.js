import Planet from '../components/planets/planets'
import PlanetsData from '../data/PlanetsData.json'

const PlanetInfo = () =>{
    return(<>
        <Planet data={PlanetsData} />
    </>)
}

export default PlanetInfo;