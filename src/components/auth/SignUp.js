import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';


class SignUp extends Component {
    
   
    state={ 
        email: '', 
        password: '', 
        firstName: '', 
        lastName: '',

    }
    handleChange = (e) => {   
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {        
        e.preventDefault();
        console.log(this.state);
       this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
       if(auth.uid) return <Redirect to='/'/>
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
                        <input type="text" id="firstName" name='firstName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name='lastName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0"> SignUp </button>
                    </div>
                    <div className="red-text center">
                        { authError ? <p>{authError}</p> : null }
                    </div>

                </form>

                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   // console.log(state);
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError,
              
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);