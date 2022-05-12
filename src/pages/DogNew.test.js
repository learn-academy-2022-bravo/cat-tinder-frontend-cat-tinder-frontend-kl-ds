import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DogNew from './DogNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When dogNew renders", () => {
  it("displays a heading", () => {
    const dogNew = shallow(<DogNew />)
    const dogNewHeadingText = dogNew.find("h2").text()
    expect(dogNewHeadingText).toEqual("Create a New dog")
  })
  it("displays a form", () => {
    const dogNew = shallow(<dogNew />)
    const formGroup = dogNew.find("FormGroup")
    expect(formGroup.length).toEqual(4)
    const formLabel = dogNew.find("Label")
    expect(formLabel.length).toEqual(4)
    const input = dogNew.find("Input")
    expect(input.length).toEqual(4)
  })
})