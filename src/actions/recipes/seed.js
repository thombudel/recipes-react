export const SEED_RECIPES = 'SEED_RECIPES'
import recipes from '../../fixtures/recipes'

export default () => {
  return {
    type: SEED_RECIPES,
    payload: recipes
  }
}
