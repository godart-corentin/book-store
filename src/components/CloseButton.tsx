import React from 'react'
import {StyleSheet, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

type Props = {
  onClick: () => void
}

export const CloseButton: React.FC<Props> = ({onClick}) => {
  return (
    <TouchableNativeFeedback onPress={onClick}>
      <Icon style={styles.icon} name="close-outline" size={24} />
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
