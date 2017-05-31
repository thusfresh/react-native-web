import React, { Component, PureComponent } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { storiesOf } from '@kadira/storybook'

class SeparatorComponent extends PureComponent {
  render () {
    return <View style={styles.separator} />
  }
}

class FlatListExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: Array.from(Array(1000).keys()).map((i) => ({key: i.toString()}))
    }

    this.renderItem = this.renderItem.bind(this)
    this.getItemLayout = this.getItemLayout.bind(this)
  }

  componentDidMount () {
    this.updateInterval = setInterval(() => {
      this.setState({
        data: [
          { key: this.state.data.length.toString() },
          ...this.state.data,
        ]
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.updateInterval)
  }

  getItemLayout (data, index) {
    return { length: 18, offset: 18 * index, index: index }
  }

  renderItem ({item, index}) {
    return <View><Text>{item.key} - {index}</Text></View>
  }

  render () {
    return <FlatList
      style={styles.container}
      data={this.state.data}
      renderItem={this.renderItem}
      ItemSeparatorComponent={SeparatorComponent}
    />
  }
}

const examples = [{
  title: 'perf',
  render() {
    return <FlatListExample />
  }
}]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderTop: '2px dashed #CCC'
  }
})

storiesOf('component: FlatList', module)
  .add('perf', () => (
    <FlatListExample />
  ))
