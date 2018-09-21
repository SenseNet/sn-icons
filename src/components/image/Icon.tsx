import * as React from 'react'

interface ImageIconProps {
    iconName: string,
    fontSize?: 'inherit' | 'default',
    style: object,
}
/**
 * Image Icon component
 */
export class ImageIcon extends React.Component<ImageIconProps, {}> {
    /**
     * renders the component
     */
    public render() {
        const { fontSize, iconName, style } = this.props
        const size = fontSize === 'default' || fontSize === 'inherit' ? '16' : '32'
        const icon = require(`../../assets/img/${size}/${iconName}.png`)
        return <img src={icon} style={style ? style : null} />
    }
}
