import firebase from '../../firebase'
import { UPDATE, LOADED } from '../reducers/names'

export const loaded = () => ({
  type: LOADED,
})

export const update = names => ({
  type: UPDATE,
  names,
})

export const subscribe = () => {
  return dispatch => {
    firebase.database().ref('/names').on('value', snapshot => {
      const names = []

      snapshot.forEach(childSnapshot => {
        names.push(childSnapshot.val())
      })

      dispatch(loaded())
      dispatch(update(names))
    })
  }
}
