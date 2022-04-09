export default function PlanetWrapper (prop) {
    
    return(
        <>
        <div className='PlanetWrapper'>
            <h3>{prop.name}</h3>
            <img src={ prop.img } alt={prop.name} className="PlanetImage" />
            <p>{prop.position}</p>
            <p>{prop.info}</p>
        </div>
        </>
    )
}