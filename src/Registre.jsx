import { useId, useState, useEffect } from 'react'
import './Registre.css'
import {  useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
export const Registre = ({ nuevoDato, data }) => {
    
    
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    const [cargo, setCargo] = useState('')
    const [tiempo, setTiempo] = useState('')
    const idPerson = useId();
    const navigate = useNavigate();
    const { id } = useParams()
    const [showDetail, setShowDetail] = useState(false)

    const [editar, setEditar] = useState({})

    const handleNombre = (e) => {
        setNombre(e.target.value)
        
    }

    const handleApellido = (e) => {
        setApellido(e.target.value)

    }

    const handleEdad = (e) => {
        setEdad(parseInt(e.target.value))

    }

    const handleCargo = (e) => {
        setCargo(e.target.value)

    }

    const handleTiempo = (e) => {
        setTiempo(e.target.value)


    }

    const handleBtn = () => {
        Swal.fire({
            title: 'Registrado!',
            icon: 'success',
            confirmButtonText: 'Continuar'
        })
        nuevoDato({ nombre, apellido, edad, cargo, tiempo, id: idPerson })
        navigate("/almacen");
    }
    const handleEdit = () => {

        nuevoDato([...data.filter((item) => item.id !== editar.id), { ...editar, nombre, apellido, edad, cargo, tiempo, }])
        navigate('/almacen')
    }
    useEffect(() => {
        const filtro = data.filter((item) => item.id == id)
        filtro.map((item) => {
            setNombre(item.nombre)
            setApellido(item.apellido)
            setEdad(item.edad)
            setCargo(item.cargo)
            setTiempo(item.tiempo)
            setEditar({ id: item.id })
        })
    }, [])
    return   <div className='main'>
    
    <main>
        <h1 className='title'>New Frenchie <input onChange={(e) => {
            setShowDetail(e.target.checked)

        }} type='checkbox' /></h1>

        <div className='container'>

            <input onChange={handleNombre} value={nombre} placeholder="Nombre" type="text" />
            <input onChange={handleApellido} value={apellido} placeholder="Apellido" type="text" />
            <input onChange={handleEdad} value={edad} placeholder="Edad" type="Number" />
            <input onChange={handleCargo} value={cargo} placeholder="Cargo" type="text" />
            <input onChange={handleTiempo} value={tiempo} placeholder="Tiempo" type="text" />

            {id ? <button className='BtnRegistrar' onClick={handleEdit}>Editar</button> : <button className='BtnRegistrar' onClick={handleBtn} >Registrar</button>}

            {showDetail ? <div className='texto'>
                <h3>Nombre:{nombre} </h3>
                <h3>Apellido:{apellido}</h3>
                <h3>Edad:{edad}</h3>
                <h3>Cargo:{cargo}</h3>
                <h3>Tiempo:{tiempo}</h3>
            </div> : ''}

        </div>

    </main>
    </div>
}