import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

function mapStateToProps(state, ownProps) {
  return {
    active: state.visibilityFilter === ownProps.filter
  }
}

function mapActionsToProps(dispatch, ownProps) {
  return {
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapActionsToProps
)(Link)

export default FilterLink
