import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App'
import BattleScreen from './screen/battle'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path=''>
          <BattleScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
