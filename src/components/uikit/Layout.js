import React from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native'

const Layout = props => {
  const { container } = styles
  return (
    <ScrollView>
      <View style={container}>
        {props.children}
      </View>
    </ScrollView>
  )
}

const LayoutDefault = () => {
  const { containerDefault } = styles
  return (
      <View style={containerDefault}>
        <Text>Нажмите на иконку поиска и начните вводить название сериала</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around'
  },
  containerDefault: {
    marginLeft: 15,
    marginTop: 30,
    textAlign: 'justify',
  }
})

export { Layout, LayoutDefault }
