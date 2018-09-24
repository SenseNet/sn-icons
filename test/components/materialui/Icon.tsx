import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { MaterialIcon } from '../../../src/components/materialui/Icon'
/**
 * MaterialUI Icon Component tests
 */
export const materialuiIconTests: Mocha.Suite = describe('Icon component', () => {

    let c!: renderer.ReactTestRenderer

    after(() => {
        c.unmount()
    })

    it('Should render without crashing', () => {
        c = renderer.create(
            <MaterialIcon
                iconName="workspace">
            </MaterialIcon>)
    })
    it('Should render without crashing with fontSize', () => {
        c = renderer.create(
            <MaterialIcon
                fontSize="default"
                iconName="workspace">
            </MaterialIcon>)
    })
    it('Should render without crashing with color', () => {
        c = renderer.create(
            <MaterialIcon
                color="primary"
                iconName="workspace">
            </MaterialIcon>)
    })
    it('Should render without crashing with classes', () => {
        c = renderer.create(
            <MaterialIcon
                classes={{}}
                iconName="workspace" >
            </MaterialIcon >)
    })
    it('Should render without crashing with styles', () => {
        c = renderer.create(
            <MaterialIcon
                style={{}}
                iconName="workspace" >
            </MaterialIcon >)
    })
    it('Should render without crashing with onClick', () => {
        c = renderer.create(
            <MaterialIcon
                onClick={(e) => console.log(e.target)}
                iconName="workspace" >
            </MaterialIcon >)
    })
    it('Should render without crashing with className', () => {
        c = renderer.create(
            <MaterialIcon
                onClick={(e) => console.log(e.target)}
                className="workspace"
                iconName="workspace" >
            </MaterialIcon >)
    })
})
