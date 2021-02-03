import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //Inicio de sesión
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
               type: actionTypes.SET_USER,
               user: result.user,
            });
        }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt=""
                />
                <img
                src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png"
                alt=""
                />
            </div>
            <Button type = "submit" onClick={signIn}>
                Entrar
            </Button>
        </div>
    )
}

export default Login
