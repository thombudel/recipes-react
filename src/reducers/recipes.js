// src/reducers/recipes.js
import { SEED_RECIPES } from '../actions/recipes/seed'
import { TOGGLE_LIKE } from '../actions/recipes/toggleLike'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case SEED_RECIPES :
      return [].concat(payload)

    case TOGGLE_LIKE :
      return state.map((recipe) => {
        if (recipe._id === payload) {
          return { ...recipe, liked: !recipe.liked }
        }
        return recipe
      })

    default :
      return state
  }
}
