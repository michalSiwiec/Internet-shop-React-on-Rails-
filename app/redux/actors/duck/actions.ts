import types from './types';

const addActor = actor => {type: types.ADD_ACTOR, actor}
const reserActors = () => {type: types.RESET_ACTORS}

export default {
    addActor,
    reserActors
}