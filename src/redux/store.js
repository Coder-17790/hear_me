import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import reducer from './producers'

const middleware = [thunk]

// export  const store = createStore(
//     reducer,
//     applyMiddleware(...middleware)
// )

export  const store = createStore(reducer)
