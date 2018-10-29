import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { StyleSheet, ViewStyle, SafeAreaView, View } from 'react-native'
import TextFormContainer from '../containers/TextFormContainer'
import ItemsContainer from '../containers/ItemsContainer'

interface Props {}
interface State {}

export default class Main extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <TextFormContainer />
            <ItemsContainer />
          </View>
        </SafeAreaView>
      </Provider>
    )
  }
}

interface Style {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCCCC'
  }
})
