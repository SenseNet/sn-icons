import * as React from 'react'
import { FlatIcon } from './flaticon/Icon'
import { FontAwesomeIcon } from './fontawesome/Icon'
import { ImageIcon } from './image/Icon'
import { MaterialIcon } from './materialui/Icon'

/**
 * Enum for icon types
 */
export enum iconType {
    /**
     * Material-ui icons
     */
    materialui,
    /**
     * Fontawesome icons
     */
    fontawesome,
    /**
     * Flaticon icons
     */
    flaticon,
    /**
     * Image icons
     */
    image,
}

interface IconProps {
    type: iconType,
    iconName: string,
    color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled',
    fontSize?: 'inherit' | 'default',
    classes?: object,
    style?: object,
    onClick?
}

/**
 * Main Icon component
 */
export class Icon extends React.Component<IconProps, {}> {
    /**
     * renders the component
     */
    public render() {
        const { type, color, fontSize, classes, iconName, style, onClick } = this.props

        switch (type) {
            case iconType.materialui:
                return <MaterialIcon color={color} fontSize={fontSize} classes={classes} iconName={iconName} style={style} onClick={onClick}></MaterialIcon>
            case iconType.flaticon:
                return <FlatIcon color={color} fontSize={fontSize} classes={classes} iconName={iconName} style={style} onClick={onClick}></FlatIcon>
            case iconType.fontawesome:
                return <FontAwesomeIcon color={color} fontSize={fontSize} classes={classes} iconName={iconName} style={style} onClick={onClick}></FontAwesomeIcon>
            case iconType.image:
                return <ImageIcon iconName={iconName} fontSize={fontSize} style={style} onClick={onClick}></ImageIcon>
            default:
                return <MaterialIcon
                    iconName={iconName}
                    color={color ? color : 'primary'}
                    fontSize={fontSize ? fontSize : 'default'}
                    classes={classes ? classes : null}></MaterialIcon>
        }
    }
}
