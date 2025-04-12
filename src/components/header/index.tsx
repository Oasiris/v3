import { FunctionalComponent, h } from 'preact'
import { Icon } from '@material-ui/core'

import CottageOutlinedSvg from '../../assets/icons/cottage-outlined.svg'

import style from './style.scss'

const Header: FunctionalComponent = () => {
    return (
        <header className="header">
            <div className="container">
                <nav class={style.nav} role="navigation">
                    <a class={`${style.navLink} ${style.homeNavLink} grow`} href="/">
                        <Icon>
                            <img src={CottageOutlinedSvg} height={30} width={30} />
                            <span class="linkAltText">Home</span>
                        </Icon>
                    </a>
                    <div className={`${style._right}`}>
                        <a class={`${style.navLink} ${style.aboutNavLink} grow`} href="/about">
                            About
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
