import './App.css';
import { Route, Switch } from 'react-router-dom'
import routes from './routes/routes'
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className="row">
          <Switch>
            {routes.map(({component, path, exact}, key) => {
              return(
                <Route
                path={path}
                key={key}
                exact={exact}
                component={component}
                />
              )}
            )}
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
