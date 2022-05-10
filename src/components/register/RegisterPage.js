import RegisterForm from "./RegisterForm";
import './register.css'
import Spaceman from '../../images/spaceman.gif'

const RegisterPage = () =>{
    return(
        <>
            <div className="RegisterDiv">
                <div className="Msg">Go For It!!</div>
                <img src={Spaceman} className="Spaceman"/>
                <RegisterForm className="registerForm" />
            </div>
        </>
    )
}

export default RegisterPage;