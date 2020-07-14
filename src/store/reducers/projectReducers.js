const initState = {
    projects: [
        {id:'1', title: 'help me find peach', content: 'blah bblahh blah'},
        {id: '2', title: 'kill the stiga', content: 'you are Geralt of rivia'},
        {id: '3', title: 'kill the stiga', content: 'you are Geralt of rivia'}
    ]
}

const projectReducers = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state
        case 'CREATE_PROJECT_ERR':
            console.log('create project error', action.err);
            return state;
    
        default:
            return state;
    }
}

export default projectReducers;