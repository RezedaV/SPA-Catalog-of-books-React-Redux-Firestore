import './App.css';
import React, {useState} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import BookBlock from "./Components/BookBlock";


function App() {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App" >
            <BookBlock/>
          </div>
        </PersistGate>
      </Provider>

  );
}

export default App;
