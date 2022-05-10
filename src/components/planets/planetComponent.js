import './planetComponent.css'

const PlanetWrapper = (prop) => {
    return(
        <>
        <div className='PlanetWrapper'>
            <h3>{prop.name}</h3>
            <img src={ prop.img } alt={prop.name} className="PlanetImage" />
            <p className='heading'>Named : </p> <span>{prop.alias} </span><br />
            <p className='heading'>Diameter : </p> <span>{prop.diameter} </span><br />
            <p className='heading'>Orbit : </p> <span>{prop.orbit} </span><br />
            <p className='heading'>Day duration : </p> <span>{prop.day} </span><br />
            <p className='heading'>Number of Moons : </p> <span>{prop.moonCount} </span><br />
            <p className='heading'>Position from the Sun : </p> <span>{prop.position}</span><br />
            <p className='info'>{prop.info}</p>
        </div>
        </>
    )
}
export default PlanetWrapper