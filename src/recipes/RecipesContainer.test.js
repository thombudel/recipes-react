import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipesContainer from './RecipesContainer'
import Title from '../components/Title'
import { recipes } from '../App'
import RecipeItem from './RecipeItem'

chai.use(chaiEnzyme)

describe('<RecipesContainer />', () => {
  const container = shallow(<RecipesContainer recipes={recipes} />)

  it('is wrapped in a div with class name "recipes"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('recipes')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the Title to "All Recipes"', () => {
    expect(container).to.contain(<Title content="Recipes" />)
  })

  it('renders all recipes as a RecipeItem', () => {
    expect(container).to.have.exactly(recipes.length).descendants(RecipeItem)
  })
})
