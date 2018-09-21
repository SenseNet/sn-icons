import * as React from 'react'

interface ImageIconProps {
    iconName: string,
    fontSize?: 'inherit' | 'default',
    style: object,
    onClick?
}
/**
 * Image Icon component
 */
export class ImageIcon extends React.Component<ImageIconProps, {}> {
    /**
     * renders the component
     */
    public render() {
        const { fontSize, iconName, style, onClick } = this.props
        const size = fontSize === 'default' || fontSize === 'inherit' ? '16' : '32'
        const icon = require(`../../assets/img/${size}/${iconName}.png`)
        return <img src={icon}
            style={style ? style : null}
            onClick={onClick ? (e) => onClick(e) : null} />
    }
}
