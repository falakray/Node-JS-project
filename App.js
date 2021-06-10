import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="testClass">
      <Router>
        <h1>Welcome to Company, Please choose your plan:</h1>

        <Switch>
          <Link to="/plan"> Select Plan here</Link>
        </Switch>

        <Route path="/plan">
          <h2>Plans available:</h2>
          <div className="testClass1">
            <table>
              <tr>
                <th></th>
                <th>Standard Plan</th>
                <th>Premium Plan</th>
              </tr>
              <tr>
                <td>General</td>
                <td>❌</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Specialist</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Physiotherapy</td>
                <td>❌</td>
                <td>✔️</td>

              </tr>
              <tr>
                <td>Surgery</td>
                <td>❌</td>
                <td>✔️</td>
              </tr>

              <tr>
                <td>•</td>
                <td>•</td>
                <td>•</td>
              </tr>

              <tr>
                <td>•</td>
                <td>•</td>
                <td>•</td>
              </tr>

              <tr>
                <td>•</td>
                <td>HK$0/Month</td>
                <td>HK$388/Month</td>
              </tr>
            </table>
          </div>
        </Route>


      </Router>
    </div>
  );
}

export default App;
