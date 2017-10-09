import { createStore } from 'redux'
import modifyStore from './reducer'


let store = createStore(modifyStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

export default store