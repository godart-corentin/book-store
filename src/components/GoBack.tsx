import React from 'react'
import {useNavigation} from '@react-navigation/core'
import {StyleSheet, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const GoBack = () => {
  const navigation = useNavigation()

  return (
    <TouchableNativeFeedback onPress={() => navigation.goBack()}>
      <Icon style={styles.icon} name="arrow-back-outline" size={24} />
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 24,
    left: 24,
    color: '#2C1810',
    zIndex: 9999,
  },
})
