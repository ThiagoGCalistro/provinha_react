import React, { useState, useContext, useEffect, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Tweetar from "./Tweetar"

export default function List() {
    const [opcao, setOpcao] = useState("");
    const [selected, setSelected] = useState(new Map());
    const [newPost, setNewPost] = useState(false);
    let post = null;

    const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const onSelect = React.useCallback(
    id => {
      // const newSelected = new Map(selected);
      // newSelected.set(id, !selected.get(id));

      // setSelected(newSelected);
      
      setNewPost(true);
    },
    [selected],
  );

  function Item({ id, title, selected, onSelect }) {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View>

      <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Item
          id={item.id}
          title={item.title}
          selected={!!selected.get(item.id)}
          onSelect={onSelect}
        />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
      {post}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
