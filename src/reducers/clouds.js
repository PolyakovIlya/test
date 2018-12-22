const clouds = (state = [], action) => {
    switch(action.type) {
        case 'GET_ALL_CLOUDS':
            return action.clouds
        default:
            return state
    }
}

export default clouds