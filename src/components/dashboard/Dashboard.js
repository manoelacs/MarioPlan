import React, { Component, } from 'react';
import { connect } from 'react-redux'


import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

const mapStateToProps = (state) => {
    return{
        projects: state.project.projects,
    }
}
class Dashboard extends Component{

    render(){
       // console.log(this.props)
       const { projects } = this.props;
        return(
            <div className="dashboead container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={ projects }/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>


        );
    }
};

export default  connect(mapStateToProps)(Dashboard);

