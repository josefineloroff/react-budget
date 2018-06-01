import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import BudgetHeader from '../components/BudgetHeader'

const getSpendings = state => state.spendings
const restOfBudget = createSelector(getSpendings, spendings =>
  spendings.reduce((acc, curr) => acc - curr.amount, 1000)
)

//runde Klammern weil die arrow funktion sonst denkt es kommt ein Block
const mapStateToProps = state => ({
  restOfBudget: state.restOfBudget,
  title: state.headerTitle,
  isVisible: state.isHeaderVisible,
})

//const mappingFunc = connect(mapStateToProps)
//mappingFunc(BudgetHeader)

export default connect(mapStateToProps)(BudgetHeader)

export const BudgetHeaderView = connect(mapStateToProps)(BudgetHeader)
