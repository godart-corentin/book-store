import React from 'react'
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export const HomeScreen: React.FC<{}> = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.contentView}>
        <Text style={styles.text}>Home</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#212121',
  },
})