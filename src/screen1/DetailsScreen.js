import React, { PureComponent } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../components/uikit'

export default class DetailsScreen extends PureComponent {
  render() {
    const { image, name, summary } = this.props.navigation.state.params
    const { navigation } = this.props
    const data = { image }
    const { container, h1, h2, sub } = styles
    return(
      <View style={container}>
        <Header
          title={name}
          onPressLeft={() => navigation.goBack()}
          iconLeft='md-arrow-back'
          colorLeft='#fff'
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data}/>
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary !== null ? summary.replace(/<[^>]+>/g,'') : summary}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff',
  },
  h1: {
    fontFamily: 'serif',
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'serif',
    fontSize: 15,
    padding: 15,
    color: 'grey',
    paddingHorizontal: 15,
    textAlign: 'justify',
  },
})
