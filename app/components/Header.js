import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>iKeyboard</Text>

        <View style={styles.input}>
          <Text>Number of Keys: </Text>
          <Button
            onPress={() => this.props.onKeyCountChange(1)}
            title='+'
          />
          <Text>{this.props.keyCount}</Text>
          <Button
            onPress={() => this.props.onKeyCountChange(-1)}
            title='-'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
  },
})
