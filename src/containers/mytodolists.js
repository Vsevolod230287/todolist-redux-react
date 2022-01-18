import lists from '../components/lists'
import {addList, removeList} from '../actions/lists'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}
const mytodolists = connect(mapStateToProps, {addList, removeList})(lists)
export default mytodolists