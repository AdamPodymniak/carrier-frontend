import Swal from 'sweetalert2';
import checkCode from './LoginAxios';
import sendRegister from './RegistrationForm';

function Register() {
    Swal.fire({
      title: 'Zaloguj się',
      html:
        '<input type="email" id="swal-input1" class="swal2-input" required>' +
        '<input type="text" id="swal-input2" class="swal2-input" required>'+
        '<input type="text" id="swal-input3" class="swal2-input" required>' +
        '<input type="text" id="swal-input4" class="swal2-input" required>' +
        '<input type="password" id="swal-input5" class="swal2-input" required>' +
        '<input type="password" id="swal-input6" class="swal2-input" required>',
      focusConfirm: false,
      preConfirm: () => {
        if (document.getElementById('swal-input1').value 
        && document.getElementById('swal-input2').value
        && document.getElementById('swal-input3').value
        && document.getElementById('swal-input4').value
        && document.getElementById('swal-input5').value
        && document.getElementById('swal-input6').value) {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('swal-input4').value,
            document.getElementById('swal-input5').value,
            document.getElementById('swal-input6').value
          ]
        }
      }
    }).then(async ()=>{
    const email = document.getElementById('swal-input1').value;
    const username = document.getElementById('swal-input2').value;
    const firstName = document.getElementById('swal-input3').value;
    const lastName = document.getElementById('swal-input4').value;
    const password = document.getElementById('swal-input5').value;
    const passwordCorrect = document.getElementById('swal-input6').value;
    if (email && password) {
      if (password === passwordCorrect){
        const res = await sendRegister(email, username, firstName, lastName, password);
        if(res.status === 201){
          Swal.fire({
              title: 'Podaj kod logowania',
              html:
                  '<input type="text" id="auth-code" class="auth-code" required>'
          }).then(async()=>{
          const userCode = document.getElementById('auth-code').value;
          if(await checkCode(userCode)){
          Swal.fire({
            toast: 'true',
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            icon: 'success',
            title: 'Zarejestrowany!'
          })
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Błędny kod'
              });
        }})
    }else if(res.data.error_code === "USER-6"){
        Swal.fire({
          icon: 'error',
          title: 'Już jest taki email'
        });
      } else if(res.data.error_code === "USER-7"){
        Swal.fire({
          icon: 'error',
          title: 'Już jest taki użytkownik'
        });
      } else if(res.data.error_code === "USER-13"){
        Swal.fire({
          icon: 'error',
          title: 'Zbyt krótkie hasło'
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Różne hasła'
      })
    }
}})

  }
export default Register;