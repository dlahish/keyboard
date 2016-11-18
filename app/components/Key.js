import React from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
let { height, width } = Dimensions.get('window')

export default (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[props.keyType]]}
      key={props.i}
      onPress={() => props.playTone(props.i)}
    >
      <Text></Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 30
  },
  WHITE: {
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: 'black',
    borderWidth: 1
  },
  BLACK: {
    flex: 0.7,
    height: height / 2,
    backgroundColor: 'black'
  }
})
