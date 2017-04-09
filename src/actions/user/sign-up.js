import API from '../../middleware/api'
import signUp from './sign-up'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) =>{
    console.log('creating user...')
    users.create(user)
    .then((result) => {
      console.log('user successfully created')
      dispatch(signIn(user))
    })
    .catch((error) => {
      console.error('oops there has been an error')
    })
  }
}
