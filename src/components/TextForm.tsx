import React, { Component } from 'react'
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle
} from 'react-native'

interface Props {
  addItem: () => void
  editingItem: (text: string) => void
  items: { id: number; title: string }[]
}

export default class TextForm extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.props.editingItem(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.addItem()}
        >
          <Text style={styles.buttonText}>追加</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

interface Style {
  container: ViewStyle
  textInput: ViewStyle
  button: ViewStyle
  buttonText: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    padding: 20
  },
  textInput: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5
  },
  button: {
    flex: 1,
    backgroundColor: '#F58E7E',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})
