import API from '../../middleware/api'
import appLoading from '../loading'
import loadSucces from '../load-succes'
import loadError from '../load-error'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()
const recipes = api.service('recipes')

export default () => {
  return (dispatch) => {
    console.log('Fetching recipes...')
    dispatch(appLoading(true))
    recipes.find()
      .then((result) => {
        console.log('Results are in!', result)
        dispatch(fetchedRecipes(result))
        dispatch(loadSucces())
        dispatch(appLoading(false))
      })
      .catch((error) => {
        dispatch(loadError(error))
      })
  }
}

const fetchedRecipes = (result) => {
  console.log('dispatching fetchedRecipes')
  return {
    type: FETCHED_RECIPES,
    payload: [].concat(result.data)
  }
}
