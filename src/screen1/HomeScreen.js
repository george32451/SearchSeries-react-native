import React, {Component} from 'react';
import { View, } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Header, ImageCard, Layout, LayoutDefault, SearchBar } from './../components/uikit'
import { STARGATE_DETAILS } from '../constants/routes'
import { searchChanged, getMovies } from '../actions'

class HomeScreen extends Component{
  state = {
    title: 'SearchSeries',
    visibleSearchbar: false,
  }

  _onChangeText = (text) => {
    this.props.searchChanged(text)
    this.props.getMovies(text)
  }

  render() {
    const { title, visibleSearchbar } = this.state
    const { navigation, movie, data } = this.props
    return (
      <View>
        {
          visibleSearchbar ?
            <SearchBar
              colorRight='#fff'
              iconRight='magnify'
              placeholder='Search'
              onChangeText={this._onChangeText}
              value={movie}
              onPressRight={() => this.setState({ visibleSearchbar: false})}
              onBlur={() => this.setState({ visibleSearchbar: false})}
            />
                           :
            <Header
              title={title}
              colorRight='#fff'
              iconRight='magnify'
              onPressRight={() => this.setState({ visibleSearchbar: true})}
            />
        }
        {console.log(data)}
        {data.length === 0 ?
          <LayoutDefault/>
                           :
          <Layout>
            {
              data.map(item => (
                  <ImageCard
                    data={item.show}
                    key={item.show.id}
                    onPress={() => navigation.navigate(STARGATE_DETAILS, (item.show))}
                  />
                )
              )
            }
          </Layout>
        }

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.search.movie,
    data: state.search.data
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    searchChanged,
    getMovies,
  },
  dispatch
)


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
