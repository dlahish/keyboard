import React, { Component } from 'react';
import orientation from 'react-native-orientation'
import { AppRegistry } from 'react-native';
import App from './app'

orientation.lockToLandscape()

AppRegistry.registerComponent('keyboard', () => App);
