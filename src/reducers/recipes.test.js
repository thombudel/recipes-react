import chai, { expect } from 'chai'
import recipesReducer from './recipes'

describe('recipes reducer', () => {
  describe('initial state', () => {
    it('is an empty array', () => {
      const expectedState = []
      const actualState = recipesReducer()
      expect(actualState).to.eql(expectedState)
    })
  })
})
