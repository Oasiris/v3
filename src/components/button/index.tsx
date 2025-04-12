import { FunctionalComponent, ComponentChildren, h } from 'preact'

import style from './style.scss'

interface ButtonProps {
    children: ComponentChildren; // Explicitly define children as a prop
}

const Button = ({ children }: ButtonProps): JSX.Element => {
    return (
        <div class={`${style.buttonWrapper} unselectable`}>
            {/* Shadow button, for spacing purposes. */}
            <button class={style.shadowButton}>{children}</button>
            <button class={style.realButton}>{children}</button>
        </div>
    )
}

export default Button
