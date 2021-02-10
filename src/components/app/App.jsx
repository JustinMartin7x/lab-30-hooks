import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharactersPage from '../../Containers/CharactersPages';
import CharacterById from '../../Containers/CharacterById';
import Header from '../Header/Header';


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={CharactersPage} />
          <Route path="/characters/:id" component={CharacterById} />
        </Switch>
      </Router>
    </>
  );
}
