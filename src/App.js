import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import Browse from './components/Browse/browse'
import Container from './components/Container/container'
import Item from './components/SingleItem/single-item'

function App() {
  const initialState = {
    favorites: []
  };

  function favoriteReducer(draft, action) {
    switch (action.type) {
      case 'setFavorites':
        draft.favorites = [...action.data];
        return;
      case 'addFavorite':
        draft.favorites.push(action.item);
        return;
      case 'removeFavorite':
        draft.favorites.splice(draft.favorites.indexOf(action.item), 1);
        return;
      default: break;
    }
  }

  const [state, dispatch] = useImmerReducer(favoriteReducer, initialState);



  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
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
      </DispatchContext.Provider>
    </StateContext.Provider>


  );
}

export default App;
