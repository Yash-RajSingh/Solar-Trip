import PlanetWrapper from "./planetComponent";

const Planet = (Data) => {
    const item = Data.data
    {item.map((element) =>{
        console.log(element)
        return(
            <PlanetWrapper
            name={element.name} 
            img = {element.image}
            position={element.position}
            />
        )
    })}
}
export default Planet