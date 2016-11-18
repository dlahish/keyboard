import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import intervals from './intervals'
import Key from './components/Key'
import Sound from 'react-native-sound'
import Header from './components/Header'

export default class Keyboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyCount: 24
    }
  }

  playTone(tone) {
    var whoosh = new Sound(`${tone}.mp3`, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.warn('failed to load the sound', error);
      }

      whoosh.play()
    })

  }

  changeKeyCount(diff) {
    const keyCount = Math.min(67, Math.max(1, this.state.keyCount + diff ))
    this.setState({ keyCount })
  }

  render() {
    const keys = intervals(this.state.keyCount, (color, tone) =>
      <Key color={color} key={tone} onPlay={() => this.playTone(tone)} />)

    return (
      <View style={{flex: 1}}>
        <Header onKeyCountChange={this.changeKeyCount.bind(this)} keyCount={this.state.keyCount}/>
        <View style={styles.keyboard}>
          {keys}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    flexDirection: 'row'
  }
})
