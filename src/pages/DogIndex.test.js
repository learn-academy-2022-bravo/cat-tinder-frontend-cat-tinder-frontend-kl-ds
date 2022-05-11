import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DogIndex from './DogIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When dogIndex renders", () => {
  it("displays a heading", () => {
    const dogIndex = shallow(<DogIndex />)
    const dogIndexHeadingText = dogIndex.find("h2").text()
    expect(dogIndexHeadingText).toEqual("Dog Index")
  })
})