// src/actions/recipes/toggleLike.js
export const TOGGLE_LIKE = 'TOGGLE_LIKE_RECIPE'

export default (recipeId) => {
  return {
    type: TOGGLE_LIKE,
    payload: recipeId
  }
}
