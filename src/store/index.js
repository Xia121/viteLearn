import { createStore } from 'vuex'
import moduleA from './modules/moduleA'
import { mutations } from './mutations'
import actions from './actions'

export default createStore({
    state: {
        id: 45555,
        groups: [1]
    },
    modules: {
        moduleA
    },
    mutations,
    actions,
    getters: {
        getGroups (state) {
            return state.groups
        }
    }
})
