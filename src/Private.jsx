import { Navigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2'
export const PrivateRoute = ({redirectTo ='/'}) => {
    let value = localStorage.getItem('user');
    if (!value) {    Swal.fire({
        title: 'Debes registrate',
        icon: 'error',
        showConfirmButton: true,
      
    })
  return <Navigate to={redirectTo}/>
  }

  return <Outlet/>
};
