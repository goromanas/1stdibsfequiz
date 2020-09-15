import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Browse from './components/Browse/browse'
import Container from './components/Container/container'
import Item from './components/Item/item'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Browse />
          </Route>
          <Route path='/item/:id' exact>
            <Item />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
