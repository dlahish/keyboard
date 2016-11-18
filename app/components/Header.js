import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>iKeyboard</Text>

        <View style={styles.input}>
          <Text style={styles.text}>Number of Keys: </Text>
          <Button
            onPress={() => this.props.onKeyCountChange(-1)}
            title='-'
          />
          <Text style={styles.text}>{this.props.keyCount}</Text>
          <Button
            onPress={() => this.props.onKeyCountChange(1)}
            title='+'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    fontSize: 20
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
