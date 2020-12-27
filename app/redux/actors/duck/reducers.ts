import types from './types';

const initialActors = {
    name: ['Angelina Jolie', 'Brad Pitt', 'Michal Karmowski'],
    listName: 'Actors data'
}

const actorsReducer = (state = initialActors, action) => {

    switch(action.type){
        case types.ADD_ACTOR:
            return {...state, name: [...state.name, action.actor]};
        case types.RESET_ACTORS:
            return {...state, name: []};
        default:
            return state;
    }
}

export default actorsReducer;
