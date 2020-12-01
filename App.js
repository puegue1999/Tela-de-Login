import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard
} from 'react-native';
import Estilos from './Estilos/estilos.js';

export default function app1(){

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logoxy] = useState(new Animated.Value(1.5));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        timing: 200,
        useNativeDriver: true,
      })
    ]).start();

  },[]);

  function keyboardDidShow(){
    Animated.parallel([
      Animated.spring(logoxy, {
        toValue: 0.7,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.spring(logoxy, {
        toValue: 1.5,
        duration: 100,
        useNativeDriver: true,
      })
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={Estilos.background}>
      <View style={Estilos.containerLogo}>
        <Animated.Image
          style={{
            transform: [{ scale: logoxy }]
          }}
          source = {require('./assets/logo.png')}
        />
      </View>

      <Animated.View
        style={[
          Estilos.container,
          {
          opacity: opacity,
          transform: [
            { translateY: offset.y }
          ]
          }
        ]}
      >
        <TextInput
          style = {Estilos.imput}
          placeholder = "E-mail"
          autoCorrect = {false}
          onChangeText = {() => {}}
        />
        <TextInput
          style = {Estilos.imput}
          placeholder = "Senha"
          autoCorrect = {false}
          secureTextEntry={true}
          onChangeText = {() => {}}
        />
        <TouchableOpacity style = {Estilos.btnSubmit}>
          <Text style = {Estilos.submitText}>
            Acessar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {Estilos.btnRegister}>
          <Text style = {Estilos.registerText}>
            Criar Conta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {Estilos.btnRegister}>
          <Text style = {Estilos.registerText}>
            Esqueceu sua senha? Clique aqui
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};