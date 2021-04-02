import React from 'react'

const ProjectDetails = ( props) => {

    const id = props.match.params.id;

    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Project Title - {id} </span>
                   <p>Duis orci purus, commodo eu faucibus at, vestibulum vitae nisl. Nam vitae nisi nec elit mattis tincidunt sit amet vel neque. Vivamus nunc magna, convallis non est sed, luctus blandit nulla. Donec dui nibh, porttitor sit amet accumsan eget, condimentum non nulla. Phasellus lobortis lacus a magna vulputate mollis. Suspendisse accumsan, ante ac pellentesque semper, ligula nulla malesuada eros, ac dictum risus leo quis lacus. Vestibulum vel imperdiet mi. Suspendisse id molestie ante. Suspendisse potenti.
                   </p>
                </div> 
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by The Net Ninja </div>
                    <div className=""> 2nd September, 2am </div>
                </div>
            </div>
        </div>
    );

}; export default ProjectDetails;