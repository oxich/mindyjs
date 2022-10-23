import {createElement } from 'react'
import * as Icons from './RemixIcons'

const MdIcons = ({name, ...props}) => {
    const element = createElement(Icons[name])
    return <element.type {...element.props} {...props}/>
}
export default MdIcons