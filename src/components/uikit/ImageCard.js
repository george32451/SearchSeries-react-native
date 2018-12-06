import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { width } from './../../constants/constants'


const ImageCard = ({data, onPress}) => {
  const { image, name } = data
  const img = image === null ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : image.original
  const { h1, cover, container, subContainer } = styles
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={subContainer}>
          <Image style={cover} source={{uri: img}} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width / 2.4,
    paddingVertical: 10,
  },
  subContainer: {
    elevation: 5,
    borderRadius: 10,
  },
  h1: {
    fontFamily: 'serif',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: width / 2.4,
    paddingTop: 5,
  },
  cover: {
    width: width / 2.4,
    height: width * 0.63,
    borderRadius: 10,
  },
})

export { ImageCard }
