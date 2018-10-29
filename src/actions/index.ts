import { ADD_ITEM, EDITING_ITEM } from './types'

let nextItemId: number = 0

export const addItem = () => {
  return {
    type: ADD_ITEM,
    id: nextItemId++
  }
}

export const editingItem = (text: string) => {
  return {
    type: EDITING_ITEM,
    editing_title: text
  }
}
