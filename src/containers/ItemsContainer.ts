import Items from '../components/Items'
import { connect } from 'react-redux'

const mapStateToProps = (state: any) => {
  return { items: state.items.items }
}

export default connect(mapStateToProps)(Items)
