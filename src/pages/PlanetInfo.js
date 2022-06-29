import Planet from '../components/planets/planets'
import PlanetsData from '../data/PlanetsData.json'
import { useEffect } from 'react'
const PlanetInfo = () => {
    useEffect(()=>{ 
        window.scrollTo({top: 0})
    },[])
    return (<>
        <div >
            <Planet data={PlanetsData} />
        </div>
    </>)
}

export default PlanetInfo;

// useEffect(() => {
//     cardRef.current.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "nearest",
//     });
//   }, []);