
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'teste',
            authorLasName: "Silva",
            authorId: 123456,
            createdAt: new Date(),

        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project});
        })
        
    }
}