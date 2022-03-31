export default function PlanetWrapper (name, img, position, description) {
    return(
        <>
        <div className='PlanetWrapper'>
            <h3>{name}</h3>
            <img src= {img} alt={name} className="PlanetImage" />
            <p>{position}</p>
            <p>{description}</p>
        </div>
        </>
    )
}