import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { width } from './../../constants/constants'


const ImageBigCard = ({ data }) => {
  const { image } = data
  const { cover, container, subContainer } = styles
  return (
      <View style={container}>
        <View style={subContainer}>
          <Image style={cover} source={{uri: image.original}} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  subContainer: {
    elevation: 5,
    borderRadius: 10,
  },
  cover: {
    width: width / 1.67,
    height: width * 0.9,
    borderRadius: 10,
  },
})

export { ImageBigCard }
