/* eslint-disable prettier/prettier */

//import
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas
import React from 'react';

import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
} from 'react-native';
import Menu from '../Main/Main';
//KeyboardAvoidingView usado keybord para evitar possível bug presente no IOS

//Import Style
import {style} from './StyleHome';


//Criar o component
export default function App() {

  return (
    <KeyboardAvoidingView style={style.background} onReady =  {() => Keyboard.dismiss}>
      <ImageBackground  source={require('../../assets/fundo.png')} style={style.image}>
      <ScrollView style={style.scroll}>

      <View style={style.containerLogo}>
        <Image source={require('../../assets/teste.png') } style={{width:100,height:95}}/>
        <Text style={style.textTitulo}>Carteira Digital de Vacinação</Text>
      </View>

      <View style={style.InfoUser}>
        <Image source={require('../../assets/perfil.png') } style={{width:95,height:95}}/>
        <Text style={style.textTitulo}>Nome Usuário</Text>
      </View>

      <View style={style.container}>

        <TouchableOpacity style={style.btnContainer} onPress = {() => Actions.listaCalendario()}>
          <Image source={require('../../assets/agenda.png') } style={style.imageButton}/>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnContainer} onPress = {() => Actions.listaCampanha()}>
        <Image source={require('../../assets/campanha.png') } style={style.imageButton}/>
        </TouchableOpacity>

      </View>

      <View style={style.container}>

        <TouchableOpacity style={style.btnContainer} onPress = {() => Actions.listainformacaodoenca()}>
        <Image source={require('../../assets/informacao.png') } style={style.imageButton}/>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnContainer} onPress = {() => Actions.listaMinhasVacinas()}>
          <Image source={require('../../assets/vacina.png') } style={style.imageButton}/>
        </TouchableOpacity>

      </View>

      <View style={style.container}>

        <TouchableOpacity style={style.btnContainer} onPress = {() => Actions.listaVacina()}>
          <Image source={require('../../assets/lista.png') } style={style.imageButton}/>
        </TouchableOpacity>

      </View>
      </ScrollView>
      <View>
        <Menu/>
      </View>
      </ImageBackground>

    </KeyboardAvoidingView>
  );
}

