import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {

    return(
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to='/newProject'>New Project</NavLink>
            </li>
            <li>
                <a href='/' onClick={ props.signOut }> Log Out</a>
            </li>            
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>
                    {  props.profile.initials  }
                </NavLink>
            </li>
        </ul>       
    );
}; 
 /** passa um metodo com props para o component */
const mapDispatchToProps = (dispatch) => { 
    return{
        signOut : () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);