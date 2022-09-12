import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'
import { Icon } from '@material-ui/core'

import CottageOutlinedSvg from '../../assets/icons/cottage-outlined.svg'

import style from './style.scss'

const Header: FunctionalComponent = () => {
    return (
        <header className="header">
            <div className="container">
                <nav class={style.nav} role="navigation">
                    <Link
                        class={`${style.navLink} ${style.homeNavLink} grow`}
                        activeClassName={style.activeNavLink}
                        href="/"
                    >
                        <Icon>
                            <img src={CottageOutlinedSvg} height={30} width={30} />
                            <span class="linkAltText">Home</span>
                        </Icon>
                    </Link>
                    <div className={`${style._right}`}>
                        <Link
                            class={`${style.navLink} ${style.aboutNavLink} grow`}
                            activeClassName={style.activeNavLink}
                            href="/about"
                        >
                            About
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
