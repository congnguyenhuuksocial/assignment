import './App.css'
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import HomePage from './components/Home.tsx';

function App() {
  return (
    <Provider store={store}>
      <>
        <HomePage />
      </>
    </Provider>
  )
}

export default App
