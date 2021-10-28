import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {MyTheme} from '../theme'

type SearchBarProps = {
  onChange: (value: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({onChange}) => {
  const [value, setValue] = useState('')

  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: MyTheme.colors.primaryLight,
          color: MyTheme.colors.primary,
        },
      ]}
      placeholder="Rechercher"
      value={value}
      onChangeText={val => {
        setValue(val)
        onChange(val)
      }}
      placeholderTextColor={MyTheme.colors.primary}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
  },
})
