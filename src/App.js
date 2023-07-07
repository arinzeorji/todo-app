import React, { useEffect, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import SeachBox from './components/layouts/SeachBox';
import Logs from './components/logs/Logs';
import AddBtn from './components/AddBtn';

import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  useEffect(() => {

    //INITAILIZE MATERIALIZE JS
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
        <SeachBox />
        <Fragment className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </Fragment>
      </Fragment>
    </Provider>
  );
}

export default App;