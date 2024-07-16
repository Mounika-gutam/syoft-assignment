// src/components/RegistrationForm.js
import {Component} from "react"
import { Navigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import "./index.css"

class RegistrationForm extends Component{
    state = {
        fullName: "",
        email: "",
        password: "",
        company: "",
        isChecked: false,
        fullNameErrMsg: "",
        emailErrMsg: "",
        passwordErrMsg: "",
        companyErrMsg: "",
        redirect: false
    }

    onChangeFullName = event => {
        this.setState({fullName: event.target.value})
    }
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1333143926.
    onChangeEmail = event => {
        this.setState({email: event.target.value})
    }
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3645479151.
    onChangePassword = event => {
        this.setState({password: event.target.value})
    }
    onChangeCompany = event => {
        this.setState({company: event.target.value})
    }

    onBlurFullName = event => {
        if (event.target.value === ""){
            this.setState({fullNameErrMsg: "Full name is required"})
        } else {
            this.setState({fullNameErrMsg: ""})
        }
    }

    onBlurEmail = event => {
        if (event.target.value === ""){
            this.setState({emailErrMsg: "Email is required"})
        } else {
            this.setState({emailErrMsg: ""})
        }
    }

    onBlurPassword = event => {
        if (event.target.value === ""){
            this.setState({passwordErrMsg: "Password is required"})
        } else {
            this.setState({passwordErrMsg: ""})
        }
    }

    onBlurCompany = event => {
        if (event.target.value === ""){
            this.setState({companyErrMsg: "Company is required"})
        } else {
            this.setState({companyErrMsg: ""})
        }
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            ...this.state,
            user_lastname: 'Doe',  // static data
            user_city: 'Hyderabad',  // static data
            user_zipcode: '500072',  // static data
        };
        try {
            const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                this.setState({ redirect: true });
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
    }

    render(){
        const {fullName, email, password, company,isChecked, fullNameErrMsg, emailErrMsg, passwordErrMsg, companyErrMsg} = this.state

        if (this.state.redirect) {
            return <Navigate to="/dashboard" />;
        }
        return(
            <div className="bg-container">
                <div className="card-image">
                    <h1 className="card-heading">Welcome to our community</h1>
                            <p className="card-subheading">Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
                                </div>
                                    <form className="form-container" onSubmit={this.submitForm}>
                                            <img src="https://i.pinimg.com/564x/d1/d2/12/d1d212f28c12a3c688f071ab57a57664.jpg" alt="logo" className="form-logo" />
                                            <h1 className="form-heading">Sign Up</h1>
                                            <p className="form-subheading">Already have an account? <Link to="/login">Sign In</Link></p>

                                            <label htmlFor="fullName" className="form-label">Full name*</label>
                                            <input type="text" id="fullName" className="form-input" value={fullName} onChange={this.onChangeFullName} onBlur={this.onBlurFullName} />
                                            <p className="form-error-msg">{fullNameErrMsg}</p>

                                            <label htmlFor="email" className="form-label">Email address*</label>
                                            <input type="text" id="email" className="form-input" value={email} onChange={this.onChangeEmail} onBlur={this.onBlurEmail} />
                                            <p className="form-error-msg">{emailErrMsg}</p>

                                            <label htmlFor="password" className="form-label">Password*</label>
                                            <input type="password" id="password" className="form-input" value={password} onChange={this.onChangePassword} onBlur={this.onBlurPassword} />
                                            <p className="form-error-msg">{passwordErrMsg}</p>

                                            <label htmlFor="company" className="form-label">Company*</label>
                                            <input type="text" id="company" className="form-input" value={company} onChange={this.onChangeCompany} onBlur={this.onBlurCompany} />
                                            <p className="form-error-msg">{companyErrMsg}</p>
                    
                                            <div className="form-checkbox-container">
                                            <input type="checkbox" className="form-checkbox" value={isChecked} />
                                            <label className="form-label-checkbox">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
                                            </div>

                                    <Link to="/dashboard"><button type="submit" className="button">Create your free account</button></Link>
                    </form>
            </div>
        )
    }
}

export default RegistrationForm