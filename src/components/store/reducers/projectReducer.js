/* eslint-disable default-case */

const initState = {
    projects:[
        {id:'1', title: 'help me find peach', content:'blah blah blah'},
        {id:'2', title: 'collect all start', content:'blah blah blah'},
        {id:'3', title: 'ogg hunt yoshi', content:'blah blah blah'},
    ]
}

const projectReducer = (state = initState, action) => {
    
    switch(action.type){
        case 'CREATE_PROJECT' :
            console.log('created projet', action.project)
          
        
           

    }

   return state

}; 

export default projectReducer;