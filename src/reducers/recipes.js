// src/reducers/recipes.js
import { SEED_RECIPES } from '../actions/recipes/seed'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case SEED_RECIPES :
      return [].concat(payload)

    default :
      return state
  }
}
