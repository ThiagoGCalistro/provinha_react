import React, { useState, useContext, useEffect, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Tweetar() {
    const [data, setData] = useState("");
    const [texto, setTexto] = useState("");
    const [usuario, setUsuario] = useState("");

  return (
    <>
    <View>
      <Text>Bora tweetar</Text>
        <TextInput
          placeholder="Data do tweet"
          autoCapitalize="none"
          autoCorrect={false}
          value={data}
          onChangeText={(data) => setData(data)}
        />
        <TextInput
          placeholder="Texto"
          autoCapitalize="none"
          autoCorrect={false}
          value={texto}
          onChangeText={(texto) => setTexto(texto)}
        />
        <TextInput
          placeholder="Usuário"
          autoCapitalize="none"
          autoCorrect={false}
          value={usuario}
          onChangeText={(usuario) => setUsuario(usuario)}
        />
      </View>
    </>
  );
}
