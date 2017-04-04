import React from 'react'
import chai, { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'

chai.use(chaiEnzyme)

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

const recipe2 = {
  title: 'Spanish Omelette',
  summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
  vegan: true,
  vegetarian: false,
  pescatarian: false,
}

const recipe3 = {
  title: 'Spanish Omelette',
  summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
  vegan: false,
  vegetarian: false,
  pescatarian: true,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('recipe')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(recipe.title)
  })

  it('shows a 🥕 when it is vegetarian', () => {
    expect(container.find('ul > li')).to.contain(<img src={Vegetarian} />)
  })
})

// describe('<RecipeItem />', () => {
//   const container = shallow(<RecipeItem { ...recipe2 } />)
//
//   it('shows a 🌾 when it is vegan', () => {
//     expect(container.find('ul > li')).to.have.text('🌾')
//   })
// })
//
// describe('<RecipeItem />', () => {
//   const container = shallow(<RecipeItem { ...recipe3 } />)
//
//   it('shows a 🐟 when it is pesky', () => {
//     expect(container.find('ul > li')).to.have.text('🐟')
//   })
// })
