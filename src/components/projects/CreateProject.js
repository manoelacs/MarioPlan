import React, { Component } from 'react'
import { createProject } from '../store/actions/projectsActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = ( dispatch ) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}
 
class CreateProject extends Component {   

    
    state={

        title: '',
        content: '', 
    } 

    
   

    handleChange = (e) => {      

        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        console.log(this.props.router);
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');

    }
   

    render() {
        console.log(this.props);
        return (
            <div className='container'>
                <form action="" onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create a new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <input type="text" id="content" name='content' onChange={this.handleChange}/>
                    </div>
                   
                    <div className="input-field">
                        <button type='submit' className="btn pink lighten-1 z-depth-0"> Create </button>
                    </div>

                </form>

                
            </div>
        )
    }
}
export default  connect(null, mapDispatchToProps)(CreateProject); // o motivo desse null