import React, { useState, useEffect } from 'react';
import ThemeProvider from './components/UI/ThemeProvider';
import {Route, Switch, withRouter} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import EntityViewer from './components/EntityViewer';
import axios from './axios';

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

  return (
    <div>
      <ThemeProvider>
        <Layout entities={entities}>
          <Switch>
            {routes}
          </Switch>
        </Layout>          
      </ThemeProvider>
    </div>
  );
}

export default withRouter(App);
