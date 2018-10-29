import { ADD_ITEM, EDITING_ITEM } from '../actions/types'

const initialState: {
  editing_title: string
  items: { id: number; title: string }[]
} = { editing_title: '', items: [] }

export const items = (state = initialState, action: any): any => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.id,
            title: state.editing_title
          }
        ]
      }
    case EDITING_ITEM:
      return {
        ...state,
        editing_title: action.editing_title
      }
    default:
      return state
  }
}

export default items
