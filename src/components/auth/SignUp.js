import React, { Component } from 'react'

class SignUp extends Component {
    state={
        email: '',
        password: '',
        firstname: '',
        lastname: '',

    }
    handleChange = (e) => {

        const {name, value} = e.target;        

       /*  if(e.target.type === 'checkbox'){
            value= e.target.checked;
        } */

        this.setState({ [name]: value})
    }
    handleSubmit = (e) => {
        
        e.preventDefault();

        console.log(e)
    }

    render() {
        return (
            <div className='container'>
                <form action="" onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name='firstname' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name='lastname' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0"> SingUp </button>
                    </div>

                </form>

                
            </div>
        )
    }
}

export default SignUp;