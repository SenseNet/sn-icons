import Icon from '@material-ui/core/Icon'
import * as React from 'react'
import '../../assets/css/flaticon.css'

interface FlatIconProps {
    iconName: string,
    color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled',
    fontSize?: 'inherit' | 'default',
    classes?: object,
    style?: object,
}
/**
 * Flaticon Icon component
 */
export class FlatIcon extends React.Component<FlatIconProps, {}> {
    /**
     * renders the component
     */
    public render() {
        const { color, fontSize, classes, iconName, style } = this.props
        return <Icon
            color={color ? color : 'primary'}
            fontSize={fontSize ? fontSize : 'default'}
            classes={classes ? classes : null}
            className={`flaticon-${iconName}`}
            style={style ? style : null}
        />
    }
}
