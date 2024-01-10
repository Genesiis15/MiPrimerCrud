import { useEffect, useState } from 'react'
import './Login.css'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const handleEmail = (e) => {
        setEmail(e.target.value)

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)

    }

    const handleLogin = () => {
        Swal.fire({
            title: 'Login!',
            icon: 'success',
            confirmButtonText: 'Continuar'
        })
        localStorage.setItem('user', true);
        navigate('/registre');
    }

    const handleCheckbox = (e) => {

    }
    useEffect(() => {
        localStorage.clear();
    }, [])

    return <>
        <div className='main'>
            <div className='box'>
                <h1 className='title' >Bienvenido</h1>
                <div className='container'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png " width={50} />
                    <input onChange={handleEmail} value={email} placeholder="Email" type="email" />
                    <input onChange={handlePassword} value={password} placeholder="Password" type="password" />
                    <div className='containerCheckbox'>
                        <h5>Recordar contrasena</h5>
                        <input onChange={handleCheckbox} type="checkbox" />
                    </div>

                    <button onClick={handleLogin} className='BtnRegistrar'>Login</button>
                </div>
            </div>
        </div>
    </>
}