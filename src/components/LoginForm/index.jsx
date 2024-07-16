// src/components/LoginForm.js
import {Component} from "react"
import {Link} from "react-router-dom"
import {Navigate} from "react-router-dom"
import "./index.css"


class LoginForm extends Component{
    state = {user_email: "", user_password: "",redirect: false}

    onChangeEmail = event => {
        this.setState({user_email: event.target.value})
    }

    onChangePassword = event => {
        this.setState({user_password: event.target.value})
    }

    submitLoginForm = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(data));
                this.setState({ redirect: true });
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render(){
        if (this.state.redirect) {
            return <Navigate to="/dashboard" />;
        }
        const {user_email, user_password} = this.state
        return(
            <div className="login-bg-container">
                <div className="login-card-image">
                    <h1 className="login-card-heading">Welcome to our community</h1>
                        <p className="login-card-subheading">Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
                            </div>
                                <form className="login-form" onSubmit={this.submitLoginForm}>
                                <img src="https://i.pinimg.com/564x/d1/d2/12/d1d212f28c12a3c688f071ab57a57664.jpg" alt="logo" className="form-logo" />
                            <label htmlFor="loginEmail" className="login-form-label">Email address*</label>
                            <input type="text" id="loginEmail" className="login-form-input" value={user_email} onChange={this.onChangeEmail} />
                        <label htmlFor="loginPassword" className="login-form-label">Password*</label>
                    <input type="password" id="loginPassword" className="login-form-input" value={user_password} onChange={this.onChangePassword} />
                    <Link to="/dashboard"><button type="submit" className="login-form-button">Log In</button></Link>
                </form>
            </div>
        )
    }
}

export default LoginForm