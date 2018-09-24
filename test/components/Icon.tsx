import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { FlatIcon } from '../../src/components/flaticon/Icon'
import { FontAwesomeIcon } from '../../src/components/fontawesome/Icon'
import { Icon, iconType } from '../../src/components/Icon'
import { ImageIcon } from '../../src/components/image/Icon'
import { MaterialIcon } from '../../src/components/materialui/Icon'
/**
 * Page Component tests
 */
export const pageTests: Mocha.Suite = describe('Icon component', () => {

    let c!: renderer.ReactTestRenderer

    after(() => {
        c.unmount()
    })

    it('Should render without crashing', () => {
        c = renderer.create(
            <Icon
                type={iconType.materialui}
                iconName="workspace">
            </Icon>)
    })
    it('Should render without crashing', () => {
        c = renderer.create(
            <Icon
                type={iconType.fontawesome}
                iconName="workspace">
            </Icon>)
    })
    it('Should render without crashing', () => {
        c = renderer.create(
            <Icon
                type={iconType.flaticon}
                iconName="workspace">
            </Icon>)
    })
    it('Should render without crashing', () => {
        c = renderer.create(
            <Icon
                type={iconType.image}
                iconName="workspace">
            </Icon>)
    })
    it('Should render without crashing', () => {
        c = renderer.create(
            <Icon
                type={null}
                iconName="workspace">
            </Icon>)
    })
    it('Should render without crashing', () => {
        c = renderer.create(
            <Icon
                color="primary"
                fontSize="default"
                classes={{}}
                type={null}
                iconName="workspace">
            </Icon>)
    })
    // image icon
    it('Should render without crashing', () => {
        c = renderer.create(
            <ImageIcon
                size={16}
                style={{ marginLeft: 2 }}
                iconName="workspace">
            </ImageIcon>)
    })
    it('Should render without crashing without size param', () => {
        c = renderer.create(
            <ImageIcon
                iconName="workspace">
            </ImageIcon>)
    })
    it('Should render without crashing with onClick param', () => {
        c = renderer.create(
            <ImageIcon
                onClick={(e) => console.log(e.target)}
                iconName="workspace">
            </ImageIcon>)
    })
    // fontawesome
    it('Should render without crashing', () => {
        c = renderer.create(
            <FontAwesomeIcon
                iconName="workspace">
            </FontAwesomeIcon>)
    })
    it('Should render without crashing with fontSize', () => {
        c = renderer.create(
            <FontAwesomeIcon
                fontSize="default"
                iconName="workspace">
            </FontAwesomeIcon>)
    })
    it('Should render without crashing with color', () => {
        c = renderer.create(
            <FontAwesomeIcon
                color="primary"
                iconName="workspace">
            </FontAwesomeIcon>)
    })
    it('Should render without crashing with classes', () => {
        c = renderer.create(
            <FontAwesomeIcon
                classes={{}}
                iconName="workspace" >
            </FontAwesomeIcon >)
    })
    it('Should render without crashing with styles', () => {
        c = renderer.create(
            <FontAwesomeIcon
                style={{}}
                iconName="workspace" >
            </FontAwesomeIcon >)
    })
    it('Should render without crashing with onClick', () => {
        c = renderer.create(
            <FontAwesomeIcon
                onClick={(e) => console.log(e.target)}
                iconName="workspace" >
            </FontAwesomeIcon >)
    })
    // flaticon
    it('Should render without crashing', () => {
        c = renderer.create(
            <FlatIcon
                iconName="workspace">
            </FlatIcon>)
    })
    it('Should render without crashing with fontSize', () => {
        c = renderer.create(
            <FlatIcon
                fontSize="default"
                iconName="workspace">
            </FlatIcon>)
    })
    it('Should render without crashing with color', () => {
        c = renderer.create(
            <FlatIcon
                color="primary"
                iconName="workspace">
            </FlatIcon>)
    })
    it('Should render without crashing with classes', () => {
        c = renderer.create(
            <FlatIcon
                classes={{}}
                iconName="workspace" >
            </FlatIcon >)
    })
    it('Should render without crashing with styles', () => {
        c = renderer.create(
            <FlatIcon
                style={{}}
                iconName="workspace" >
            </FlatIcon >)
    })
    it('Should render without crashing with onClick', () => {
        c = renderer.create(
            <FlatIcon
                onClick={(e) => console.log(e.target)}
                iconName="workspace" >
            </FlatIcon >)
    })
    // material ui
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
