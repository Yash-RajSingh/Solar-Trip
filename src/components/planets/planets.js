import PlanetWrapper from "./planetComponent";

const Planet = (Data) => {
    return(
        <>
        {Data.data.map((element,key) =>{
            console.log(element.name,element.image,element.position,)
            return(
                <PlanetWrapper key={key}
                name={element.name} 
                img={element.image}
                position={element.position}
                info={element.info}
                />
            )
        })}
        </>
    )
}
export default Planet
