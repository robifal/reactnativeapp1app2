// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import {Button, Text, View, StyleSheet} from 'react-native';

// const App1 = () => {
//   const [cliques, setCliques] = useState(0);

//   return (
//     <View style={styles.container}>
//     <Button title="OK" onPress={() => {
//       setCliques(cliques + 1);
//     }} />
//     <Text>Quantidade de cliques: {cliques}</Text>
//     <StatusBar style="auto"/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#B0C4DE',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App1;

import { StatusBar } from "expo-status-bar";
import React from "react";
import {Text, StyleSheet, View} from "react-native";


const Campus = (props) => {
  return(
    <Text>O campus {props.nome} foi fundado em {props.anoFundacao}.</Text>
  )
}

const InstitutoFederal = (props) => {
  return(
    <Text>{props.sigla} - {props.uf}</Text>
  );
}

const App2 = () => {
  return(
    <>
      <InstitutoFederal sigla="IFAL" uf="AL" />
      <Campus nome="Maceió" anoFundacao={1909} />
      <Campus nome="Rio Largo" anoFundacao={2014} />
      <Campus nome="Satuba" anoFundacao={1905} />
      <InstitutoFederal sigla="IFPE" uf="PE" />
      <Campus nome="Palmares" anoFundacao={2014} />
      <Campus nome="Garanhuns" anoFundacao={2010} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App2;



