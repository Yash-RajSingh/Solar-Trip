import PlanetWrapper from "./planetComponent";

export default function Planet(Data) {
    const item = Data.data
    {item?.map(e =>{
        console.log(e)
        return(
            <PlanetWrapper
            name={e.name} 
            img = {e.image}
            position={e.position}
            />
        )
    })}
}
