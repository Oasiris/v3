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
                        className={`${style.navLink} ${style.homeNavLink}`}
                        activeClassName={style.activeNavLink}
                        href="/"
                    >
                        <Icon>
                            <img src={CottageOutlinedSvg} height={30} width={30} />
                        </Icon>
                    </Link>
                    <div className={`${style._right}`}>
                        <Link
                            className={`${style.navLink} ${style.aboutNavLink}`}
                            activeClassName="activeNavLink"
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
