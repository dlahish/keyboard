import React from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
let { height, width } = Dimensions.get('window')

export default (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[props.color]]}
      onPressIn={() => props.onPlay()}
      onPressOut={() => props.onStop()}>
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
