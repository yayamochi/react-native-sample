import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'

interface Props {
  items: { id: number; title: string }[]
}

export default class Items extends Component<Props> {
  render() {
    let items = this.props.items

    return (
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => `${item.id}`}
      />
    )
  }
}
