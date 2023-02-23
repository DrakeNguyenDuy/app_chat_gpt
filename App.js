import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GiftedChat, QuickReplies} from 'react-native-gifted-chat';
import Login from './src/screen/login';

const logo = require('./asstes/logo.jpeg');

const API_URL = 'https://api.openai.com/v1/completions';
const YOUR_API_KEY = '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';
const MAX_TOKENS = 3900;
const Context = React.createContext({isLogin: false, test:"Hlllo"});
export default function App() {
  return (
    <Context.Provider>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </Context.Provider>
  );
}
