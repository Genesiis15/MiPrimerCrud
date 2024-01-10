import { Registre } from './Registre'
import { Almacen } from './Almacen'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Login } from './Login'
import { PrivateRoute } from './Private'
import { useEffect, } from 'react'
import { useNavigate } from "react-router-dom";


export function App() {

    const location = useLocation();
    const [currency, setCurrency] = useState(false)
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [user] = useState(null)

    const nuevoDato = (valor) => {
        setData([...data, valor])
    }

    const handleEdit = (valor) => {
        setData(valor)
        Swal.fire({
            title: 'Actualizaste tu frenchie!',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const handleDelete = (id) => {
        const eliminar = data.filter((item) => (item.id !== id))

        setData(eliminar)

    }

    const handleSalir = () => {
        setData([])
        navigate('/')
        Swal.fire({
            title: 'Gracias por visitarnos!!!',

            showConfirmButton: false,
            timer: 1500
        })


    }
    useEffect(() => {
        if (location.pathname == '/') {
            setCurrency(false)
        } else {
            setCurrency(true)
        }
    }, [location])

    return <>
        <nav>
            <div className='brand'>
                <h1>WorkingFrenchie</h1>
            </div>
            {currency && (<ul>
                <li><Link className='link' to={'/registre'}>Registre</Link> </li>
                <li><Link className='link' to={'/Almacen'}>Almacen</Link></li>
                <button className='btnSalir' onClick={() => handleSalir()} >Salir</button>

            </ul>)}
        </nav>

        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<PrivateRoute user={user} />}>
                <Route path='/registre' element={<Registre nuevoDato={nuevoDato} data={data} />} />
                <Route path='/Almacen' element={<Almacen data={data} handleDelete={handleDelete} />} />
                <Route path='/registre/:id' element={<Registre nuevoDato={handleEdit} data={data} />} />
            </Route>
        </Routes>


    </>
    {/* <TwitterFollowCard userName={'midudev'} name={"Genesis Rojas"} isfollowing={'Seguir'}/>
     <TwitterFollowCard userName={'pheralb'} name={"Mariangel Rojas"} isfollowing={'Seguir'}/>
     <TwitterFollowCard userName={'elonmuske '} name={"Miguel Angel Duran"} isfollowing={'Seguir'}/> */}

}
