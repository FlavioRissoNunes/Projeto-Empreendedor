/* eslint-disable prettier/prettier */

//import
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//import Style
import {style} from './StyleFamily';

//KeyboardAvoidingView usado keybord para evitar possível bug presente no IOS

//Criar o component
export default class Familia extends Component {

  render() {
    return (
      <View style={style.container}>
        <View style={style.editContainer}>
          <Image source={this.props.imagem} style={style.imagem} />
          <Icon
            style={style.searchIconInfo}
            name="save"
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            name="pencil-alt"
            size={20}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            name="trash"
            size={20}
            color="#35AAFF"
          />
        </View>
        <Text style={style.textTitulo}>{this.props.nomeFamiliar}</Text>
        <Text style={style.textStyle}>{this.props.vacina} /Data Aplicação: {this.props.dtAplicacao} / Data Renovação: {this.props.dtRenovacao}</Text>
      </View>
    );
  }
}

