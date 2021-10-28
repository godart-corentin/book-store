import React from 'react'
import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

type ButtonProps = {
  onPress: () => void
  title: string
  icon?: string
  visible?: boolean
  // style
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  containerStyle,
  textStyle,
  icon,
  visible = true,
}) => {
  return visible ? (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.buttonWrapper, containerStyle]}>
      {icon && <Icon style={styles.icon} name={icon} size={24} />}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  ) : null
}

const styles = StyleSheet.create({
  buttonWrapper: {
    elevation: 8,
    backgroundColor: '#D5A55C',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Montserrat',
    alignSelf: 'center',
  },
  icon: {
    marginRight: 8,
  },
})
