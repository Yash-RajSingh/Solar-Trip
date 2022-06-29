import RegisterForm from "./RegisterForm";
import './register.css'
import Spaceman from '../../images/spaceman.gif'
import { useEffect } from 'react'

const RegisterPage = () =>{
    useEffect(()=>{ 
        window.scrollTo({top: 0})
    },[])
    return(
        <>
            <div className="RegisterDiv" >
                <div className="Msg">Go For It!!</div>
                <img src={Spaceman} className="Spaceman"/>
                <RegisterForm className="registerForm" />
            </div>
        </>
    )
}

export default RegisterPage;