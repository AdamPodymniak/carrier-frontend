import Login from './Login';
import Register from './Register';
function IsNotLoggedIn(){
    return (    
    <div className="LoginForm">
        <div className="LoginBtn" onClick={Login}>ZALOGUJ</div><br/>
        <div className="LoginBtn" onClick={Register}>ZAREJESTRUJ</div>
    </div>
)}
export default IsNotLoggedIn;