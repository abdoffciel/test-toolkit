import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
