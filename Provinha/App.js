/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useContext, useEffect, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Tweetar from "./Components/Tweetar"
import Listar from "./Components/List"

export default function App() {
    const [opcao, setOpcao] = useState("");

    let mostraropcao = <Tweetar/>;

    if(opcao == "Tweetar"){
      mostraropcao = <Tweetar/>
    } else if(opcao == "Listar"){
      mostraropcao = <Listar/>
    }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">

          <Button onPress={() => setOpcao("Tweetar")}  title="Tweetar" />
          <Button onPress={() => setOpcao("Listar")} title="Listar" />
          <View>
            {mostraropcao}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
