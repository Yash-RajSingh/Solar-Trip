import { useState } from "react";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [time, setTime] = useState('');
    const [color, setColor] = useState('white');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const info = {name, address, age, time, color}
        console.log(info)
    }

    return (
        <>
            <div className='formdiv'>
                <h4>Solar trip registration form</h4>
                <form onSubmit={handleSubmit}>
                    <label>Fullname</label>
                    <input type="text" placeholder='Enter your full name' value={name} onChange={(e) => setName(e.target.value)} required />
                    <label>Address</label>
                    <input type="text" placeholder="Enter your residential address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <div className="Miniform">
                        <div>
                            <label>Date of Birth</label>
                            <input type="date" data-date-format="DD MMMM YYYY" value={age} onChange={(e) => setAge(e.target.value)} required />
                        </div>
                        <div>
                            <label>Spaceflight Time Slot</label>
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                        </div>
                    </div>
                    <label>Choose Spacesuit Color :</label>
                    <input type="color" id="col" value={color} onChange={(e) => setColor(e.target.value)} />
                    <button type="submit" id="SButton">Submit</button>
                </form>
            </div>
        </>
    )
}
export default RegisterForm;