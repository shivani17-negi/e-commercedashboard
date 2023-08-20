import './App.css';
import Nav from  './Nav';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1> product listing component</h1>} />
            <Route path="/add" element={<h1> add product component</h1>} />
            <Route
              path="/update"
              element={<h1> update product component</h1>}
            />
            <Route path="/logout" element={<h1> logout component</h1>} />
            <Route path="/profile" element={<h1> profile component</h1>} />
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />


          <Route element ={<PrivateComponent/>}>
          <Route path="/" element={<h1> product listing component</h1>} />
          <Route path="/add" element={<h1> add product component</h1>} />
          <Route path="/update" element={<h1> update product component</h1>} />
          <Route path="/logout" element={<h1> logout component</h1>} />
          <Route path="/profile" element={<h1> profile component</h1>} />
          </Route>
          <Route path="/SignUp" element={<SignUp/>} />

        </Routes>
        <Nav />
        <Footer />
      </BrowserRouter>
    </div>
  
  );
}

export default App;
