import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("When the Header renders", () => {
    it("shows 2 NavItems", () => {
        const renderedHeader = shallow(<Header />)

        const renderedNavItems = renderedHeader.find("NavItem")

        expect(renderedNavItems.length).toEqual(2)

    })
})