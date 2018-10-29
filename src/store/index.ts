import reducers from '../reducers'
import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

const store = createStore(reducers, devToolsEnhancer())

export default store
