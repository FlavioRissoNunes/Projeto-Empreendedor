/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';


import Login from './components/Login/Login';
import Main from './components/Main/Main';
import CreateUser from './components/CreateUser/CreateUser';
import ListaCamapanha from './components/CampanhaVacinacao/ListCampanhaVacinacao';

export default function App() {
  return (
<Router>
    <Stack key="root">
    <Scene key="login" component={Login} title="Login" hideNavBar={true} />
    <Scene key="main" component={Main} title="Main"  hideNavBar={true}/>
    <Scene key="listaCampanha" component={ListaCamapanha} title="Campanha Vacinação" hideNavBar={true}/>
    <Scene key="createUser" component={CreateUser} title="Create User" hideNavBar={true}/>
    </Stack>
</Router>

  );
}