import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Screens/NotFound';
import StudentsView from './Screens/StudentsView';
import AddStudent from './Screens/AddStudent';
import EditStudent from './Screens/EditStudent';
import HonoredView from './Screens/HonoredView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Components/NavBar';
import "./css/App.css";



const App = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <div>
          <Routes>

            <Route exact path="/" element={<StudentsView />} />
            
            <Route exact path="/add" element={<AddStudent />} />

            <Route exact path="/edit" element={<EditStudent />} />

            <Route exact path="/honored" element={<HonoredView />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>

        <ToastContainer />
      </div>
    </Router>
  );
}
 
export default App;