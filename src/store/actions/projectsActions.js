
export const createProject = (project) => {

    const newProject = {
        authorFirstName: 'teste',
        authorLasName: "Silva",
        authorId: 123456,
        createdAt: new Date(),
    }; 



    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, newProject           

        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch( (err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        } )
        
    }
}