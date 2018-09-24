import * as React from 'react'

interface ImageIconProps {
    iconName: string,
    size?: number | 'inherit' | 'default',
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
        const { iconName, size, style, onClick } = this.props
        const imgSize = size || size === 'default' || size === 'inherit' ? '16' : '32'

        // tslint:disable-next-line:no-var-requires
        const image = require(`../../assets/img/icons/${size}/${iconName}.png`)

        const styler = {
            backgroundImage: `url(${image})`,
            width: `${imgSize}px`,
            height: `${imgSize}px`,
        }
        const styles = style ? style : null
        return <span style={{ ...styler, ...styles }}
            onClick={onClick ? (e) => onClick(e) : null} />
    }
}
