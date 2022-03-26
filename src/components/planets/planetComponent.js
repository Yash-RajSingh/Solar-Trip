export default function PlanetWrapper (name, img, position, description) {
    return(
        <>
        <div className='PlanetWrapper'>
            <h3> {name} </h3>
            <img src= {img} alt= {name} />
            <p> {position} </p>
            <p> {description} </p>
        </div>
        </>
    )
}
