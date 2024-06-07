import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import allReducers from './reducers/store.js'
import { Provider } from 'react-redux'
const store = createStore(allReducers);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)
