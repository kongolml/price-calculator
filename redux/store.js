import { createStore } from 'redux'
import modifyStore from './reducer'


let store = createStore(modifyStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store