import chai, { expect } from 'chai'
import freeze from 'deep-freeze-node'
import recipesReducer from './recipes'
import { TOGGLE_LIKE } from '../actions/recipes/toggleLike'

describe('recipes reducer', () => {
  describe('initial state', () => {
    it('is an empty array', () => {
      const expectedState = []
      const actualState = recipesReducer()
      expect(actualState).to.eql(expectedState)
    })
  })

  describe(TOGGLE_LIKE, () => {
    it('toggles the `liked` state on a recipe', () => {
      const initialState = freeze([
        {
          _id: '1',
          liked: false,
        },
        {
          _id: '4',
          liked: true,
        }
      ])

      const action = freeze({
        type: TOGGLE_LIKE,
        payload: '1'
      })

      const eventualState = [
        {
          _id: '1',
          liked: true,
        },
        {
          _id: '4',
          liked: true,
        }
      ]

      const actualState = recipesReducer(initialState, action)

      expect(actualState).to.eql(eventualState)
    })
  })
})
