import React, { Component } from 'react'

class SignIn extends Component {
    state={
        email: '',
        password: '',      

    }
    handleChange = (e) => {

       // const {name, value} = e.target;        

       /*  if(e.target.type === 'checkbox'){
            value= e.target.checked;
        } */

        this.setState({ [e.target.id]: e.target.value})
    }
    handleSubmit = (e) => {
        
        e.preventDefault();

        console.log(e)
    }

    render() {
        return (
            <div className='container'>
                <form action="" onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name='password' onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>

                </form>

                
            </div>
        )
    }
}

export default SignIn
