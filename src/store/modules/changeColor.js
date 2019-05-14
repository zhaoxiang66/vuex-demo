const state = {
    myState:true
}

const getters = {
    myState:state => state.myState
}

const mutations = {
    toggleState(state){
        state.myState = !state.myState;
    }
}

const actions = {
    toggleState(context){
        context.commit('toggleState');
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}