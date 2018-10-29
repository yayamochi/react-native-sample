import TextForm from '../components/TextForm'
import { addItem, editingItem } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state: any) => {
  return { items: state.items }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: () => {
      dispatch(addItem())
    },
    editingItem: (text: string) => {
      dispatch(editingItem(text))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextForm)
