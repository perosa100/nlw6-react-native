import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/theme'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

import { SignIn } from './src/screens/SignIn'

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  )
}
