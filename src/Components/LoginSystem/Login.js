import Swal from 'sweetalert2';
import login from './JWT';

function Login() {
    Swal.fire({
      title: 'Zaloguj się',
      html:
        '<input type="text" id="swal-input1" class="swal2-input" required>' +
        '<input type="password" id="swal-input2" class="swal2-input" required>',
      focusConfirm: false,
      preConfirm: () => {
        if (document.getElementById('swal-input1').value && document.getElementById('swal-input2').value) {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      }
    }).then(async()=>{

    if (document.getElementById('swal-input1').value && document.getElementById('swal-input2').value) {
      const email = document.getElementById('swal-input1').value;
      const password = document.getElementById('swal-input2').value;
      if (await login(email, password)){
        Swal.fire({
          toast: 'true',
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          icon: 'success',
          title: 'Zalogowany!'
        })}
      else {
        Swal.fire({
          icon: 'error',
          title: 'Nie udało się zalogować'
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Nie podałeś wszystkich danych'
      })
    }
})

  }
export default Login;