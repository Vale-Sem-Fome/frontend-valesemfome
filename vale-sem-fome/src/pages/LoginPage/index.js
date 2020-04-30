import React from 'react';
import { 
    LoginForm,
    Footer
} from './../../components';
import './login-page.scss';

function LoginPage() {

    return (
        <div className="login-page">
            <LoginForm />
            <Footer />
        </div>
    )
}

export default LoginPage;