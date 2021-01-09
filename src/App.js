import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Results from './pages/results';
import ShipsProvider from './contexts/ships';

function App() {
  return (
    <ShipsProvider>
      <Router>
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ShipsProvider>
  );
}

export default App;
