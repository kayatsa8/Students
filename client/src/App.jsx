import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Screens/NotFound';
import StudentsView from './Screens/StudentsView';



const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Routes>

            <Route exact path="/" element={<StudentsView />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>

        {/* put toast here */}
      </div>
    </Router>
  );
}
 
export default App;