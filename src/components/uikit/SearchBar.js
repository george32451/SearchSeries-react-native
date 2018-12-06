import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { width } from '../../constants/constants'

const SearchBar = ({
  iconRight,
  colorRight,
  onPressRight,
  onChangeText,
  placeholder,
  value,
  onBlur
}) => {
  const { container, sub, iconRightStyle, inputStyle, searchStyle } = styles
  return (
      <View style={container}>
        <View style={sub}>
          <TextInput
            style={inputStyle}
            onChangeText={onChangeText}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
          />
          <TouchableOpacity onPress={onPressRight}>
            <View style={searchStyle}>
              <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, { color: colorRight}]}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#30D0FE',
    height: 66,
    paddingLeft: 22,
    paddingBottom: 10,
    elevation: 5,
    position: 'relative',
    width: width,
  },
  sub: {
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 35,
    backgroundColor: '#fff',
    height: 45,
    borderRadius: 20
  },
  inputStyle: {
    fontSize: 16,
    height: 40,
    width: width - 90,
    marginLeft: 15,
    backgroundColor: '#fff'
  },
  searchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconRightStyle: {
    paddingTop: 5,
    fontSize: 30,
  },
})

export { SearchBar }
