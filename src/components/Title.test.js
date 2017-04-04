import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'

chai.use(chaiEnzyme())

describe('<Title />', () => {
  const title = shallow(<Title content="Hello, World" />)

  it('has a wrapping h1 tag', () => {
    expect(title).to.have.tagName('h1')
  })

  it('renders the content', () => {
    expect(title).to.have.text('Hello, World')
  })

  it('with a different content prop', () => {
    const title = shallow(<Title content="Something Completely Different!" />)

    expect(title).to.have.text('Something Completely Different!')
  })
})
