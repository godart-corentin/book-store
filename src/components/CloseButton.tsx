import React from 'react'
import {StyleSheet, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import {MyTheme} from '../theme'

type Props = {
  onClick: () => void
}

export const CloseButton: React.FC<Props> = ({onClick}) => (
  <TouchableNativeFeedback onPress={onClick}>
    <Icon
      style={[styles.icon, {color: MyTheme.colors.primaryDark}]}
      name="close-outline"
      size={24}
    />
  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 24,
    left: 24,
    zIndex: 9999,
  },
})
