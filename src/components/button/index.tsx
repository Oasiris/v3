import { FunctionalComponent, h } from 'preact'

import style from './style.scss'

const Button: FunctionalComponent = ({ children }) => {
    return (
        <div class={`${style.buttonWrapper} unselectable`}>
            {/* Shadow button, for spacing purposes. */}
            <button class={style.shadowButton}>{children}</button>
            <button class={style.realButton}>{children}</button>
        </div>
    )
}

export default Button
