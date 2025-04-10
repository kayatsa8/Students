import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Screens/NotFound';
import Students from './Screens/StudentsView';



const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Switch>

            <Route exact path="/">
              <Students />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>

        {/* put toast here */}
      </div>
    </Router>
  );
}
 
export default App;