import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import apiKey from './config';

function App() {
  console.log(apiKey);
  console.log(Router);
  console.log(Route);
  return (
    <Router>
      <Route path='/'></Route>
    </Router>
  );
}

export default App;
