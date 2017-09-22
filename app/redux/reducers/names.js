export const LOADED = 'names/LOADED'
export const UPDATE = 'names/UPDATE'

const initialState = {
  isLoaded: false,
  data: [],
}

const requests = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        isLoaded: true,
      }
    case UPDATE:
      return {
        ...state,
        data: [
          ...action.names,
        ],
      }
    default:
      return state
  }
}

export default requests
