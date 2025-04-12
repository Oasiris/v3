import { FunctionalComponent, h } from 'preact'

import './style.scss'

const Notfound: FunctionalComponent = () => {
    return (
        <div class="notfound">
            <h1>Error 404</h1>
            <p>That page doesn&apos;t exist.</p>
            <a href="/">
                <h4>Back to Home</h4>
            </a>
        </div>
    )
}

export default Notfound
