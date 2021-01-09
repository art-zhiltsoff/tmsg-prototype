import React, { useState, useEffect, Suspense } from 'react';
import ThemeProvider from './components/UI/ThemeProvider';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import EntityViewer from './components/EntityViewer';
import axios from './axios';
import Spinner from './components/UI/Spinner';

const Charts = React.lazy(() => {
  return import('./components/ChartsDemo');
})

function App() {
  const [entities, setEntities] = useState({});
  
  useEffect(() => {
    axios.get('/entities.json')
    .then(response => {
      setEntities(response.data);
    })
  }, []);
  
  const routes = Object.keys(entities).map(key => {
    return <Route path={"/"+key} exact component={EntityViewer} /> 
  });
  routes.push(<Route path="/" exact component={HomePage}/>);
  routes.push(<Route path="/charts" render={props => <Charts {...props}/>}/>);

  return (
    <div>
      <ThemeProvider>
        <Layout entities={entities}>
          <Suspense fallback={<Spinner />}>
            <Switch>
              {routes}
            </Switch>
          </Suspense>
        </Layout>          
      </ThemeProvider>
    </div>
  );
}

export default withRouter(App);
