import React, { Component } from 'react'

class SignUp extends Component {
    state={
        title: '',
        content: '',     

    }

    handleChange = (e) => {

        const {name, value} = e.target;      

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
                        <button className="btn pink lighten-1 z-depth-0"> Create </button>
                    </div>

                </form>

                
            </div>
        )
    }
}

export default SignUp;