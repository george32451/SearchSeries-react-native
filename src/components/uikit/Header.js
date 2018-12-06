import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { width } from '../../constants/constants'

const Header = ({ iconLeft, iconRight, colorLeft, colorRight, title, onPressLeft, onPressRight }) => {
  const { container, textStyle, iconLeftStyle, iconRightStyle } = styles
  return (
      <View style={container}>
        {iconLeft &&
          <TouchableOpacity onPress={onPressLeft}>
            <Ionicons name={iconLeft} style={iconLeftStyle} color={colorLeft}/>
          </TouchableOpacity>
        }
        <Text numberOfLines={1} ellipsizeMode='tail' style={textStyle}>{title}</Text>
        {iconRight &&
          <TouchableOpacity onPress={onPressRight}>
            <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, { color: colorRight}]}/>
          </TouchableOpacity>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#30D0FE',
    height: 66,
    paddingLeft: 22,
    paddingBottom: 10,
    elevation: 5,
    position: 'relative',
    width: width,
  },
  textStyle: {
    paddingTop: 10,
    fontSize: 28,
    color: '#fff',
    fontFamily: 'serif',
    width: width - 120,
  },
  iconLeftStyle: {
    paddingTop: 12,
    fontSize: 35,
    paddingRight: 10,
  },
  iconRightStyle: {
    paddingTop: 15,
    fontSize: 30,
    marginRight: 5,
  },
})

export { Header }
