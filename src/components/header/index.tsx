import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'

import { Icon } from '@material-ui/core'

import CottageOutlinedSvg from '../../assets/icons/cottage-outlined.svg'

import './style.scss'

const Header: FunctionalComponent = () => {
    return (
        <header className="header">
            <nav role="navigation">
                <Link className="navLink homeNavLink" activeClassName="activeNavLink" href="/">
                    <Icon>
                        <img src={CottageOutlinedSvg} height={32} width={32} />
                    </Icon>
                </Link>
                <div class="_right">
                    <Link className="navLink aboutNavLink" activeClassName="activeNavLink" href="/">
                        About
                    </Link>
                </div>
            </nav>

            {/* <h1>Preact App</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/profile">
                    Me
                </Link>
                <Link activeClassName={style.active} href="/profile/john">
                    John
                </Link>
            </nav> */}
            <div>Test</div>
        </header>
    )
}

export default Header
