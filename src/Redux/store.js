import { createStore} from "redux";
import reducer from './Reducer/reducer'
let store = createStore(reducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
 export default store;