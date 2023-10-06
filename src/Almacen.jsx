import './Almacen.css'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
export const Almacen = ({ data, handleDelete }) => {
    const navigate = useNavigate();
    const handleEdit = (id) => {
       
        navigate(`/registre/${id}`)

    }

    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: 'Eliminado!',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        })
        handleDelete(id)
    }

    return <>
        {data.map((valor, i) => {
            
            return (
                <div className='caja' key={i}>

                    <h2> {`Nombre: ${valor.nombre} Apellido: ${valor.apellido} Edad: ${valor.edad}`}</h2>
                    <h2>{` Cargo: ${valor.cargo} Tiempo: ${valor.tiempo}`}</h2>

                    <div className='groupBtn'>
                        <button className='btnEditar' onClick={() => handleEdit(valor.id)}>Editar</button>
                        <button className='btnEliminar' onClick={() => handleDeleteBtn(valor.id)} >Eliminar</button>
                    </div>

                </div>

            )
        })}

    </>
}