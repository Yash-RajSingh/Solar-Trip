import PlanetWrapper from "./planetComponent";
import { useState } from "react";
import './planet.css'

const Planet = (Data) => {
    const [prev, setCurrent] = useState(0)
    function nextCurrent(){
        setCurrent(prev => prev + 1)
    }
    function prevCurrent(){
        setCurrent(prev => prev - 1)
    }
    return(
        <>
        <PlanetWrapper 
            name={Data.data[prev].name} 
            img={Data.data[prev].image}
            alias={Data.data[prev].alias}
            diameter={Data.data[prev].diameter}
            orbit={Data.data[prev].orbit}
            day={Data.data[prev].day}
            moonCount={Data.data[prev].moonCount}
            position={Data.data[prev].position}
            info={Data.data[prev].info}
        />
        {prev<7 && <button onClick={nextCurrent} className="nextButton"> Next</button>}
        {prev>0 && <button onClick={prevCurrent} className="previousButton"> Previous</button>}
        </>
    )
}
// const Planet = (Data) => {
//     return(
//         <>
//         {Data.data.map((element,key) =>{
//             console.log(element.name,element.image,element.position,)
//             return(
//                 <PlanetWrapper key={key}
//                 name={element.name} 
//                 img={element.image}
//                 alias={element.alias}
//                 diameter={element.diameter}
//                 orbit={element.orbit}
//                 day={element.day}
//                 moonCount={element.moonCount}
//                 position={element.position}
//                 info={element.info}
//                 />
//             )
//         })}
//         </>
//     )
// }
export default Planet
