/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function App(){
  return(
    <>
    <View style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.letra}>Menu</Text>
        </View>
        <View style={styles.menu}>
        <Text style={styles.letra}>Logs</Text>
        </View>
        <View style={styles.menu}>
        <Text style={styles.letra}>Credits</Text>
        </View>
    </View>
    
    <View style={styles.body}>
      <View style={styles.box1}>
          <View style={styles.cx1}></View>
          <View style={styles.cx1}></View>
          <View style={styles.cx1}></View>
      </View>
      <View style={styles.box2}>
          <View style={styles.cx2}></View>
          <View style={styles.cx2}></View>
          <View style={styles.cx2}></View>
       </View>
      <View style={styles.box3}>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
        <View style={styles.cx3}></View>
      </View>
    </View>
    <View style={styles.footer}>
      <Text style={styles.textFooter}>Exercício 1 - DDM</Text>
    </View>
  </>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#808080',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu:{
    width: 90,
    height: 30,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  letra:{
    fontFamily: 'React',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  body:{
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems:'center',
    margin: 40,
    borderRadius: 20,
    backgroundColor:'#9370db'
  },
  box1:{
    width: 225,
    height: 120,
    backgroundColor: '#9400d3',
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  cx1:{
    width: 40,
    height: 100,
    margin: 8,
    backgroundColor: 'black'
  },
  box2:{
    width: 225,
    height: 120,
    backgroundColor: '#9400d3',
    flexDirection: 'column',
    justifyContent: 'space-around'

  },
  cx2:{
    width: 200,
    height: 25,
    margin: 12,
    backgroundColor: 'black'

  },
  box3:{
    width: 225,
    height: 120,
    backgroundColor: '#9400d3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'

  },
  cx3:{
    width: 30,
    height: 27,
    margin: 4,
    backgroundColor: 'black'
  },
  footer:{
    width: '100%',
    height: 50,
    backgroundColor: '#4B0082',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  textFooter:{
    color: '#fff',
    fontSize: 20
  }
}
)