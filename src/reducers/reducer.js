export default (state, action) => {
  //add switch

  switch (action.type) {
    case 'INIT':
      return { ...state, initialized: true }
  }
  return state
}
