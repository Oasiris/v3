import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'

import Home from '../routes/home'
import About from '../routes/about'
import NotFoundPage from '../routes/notfound'
import Header from './header'

const App: FunctionalComponent = () => {
    return (
        <div id="root">
            {/* <Header /> */}
            <div style={{ height: '40px' }} />
            <Router>
                <Route path="/" component={Home} />
                {/* <Route path="/about/" component={About} user="me" /> */}
                <Route path="/about/" component={About} />
                {/* <NotFoundPage default />
                 */}
                <Route default component={NotFoundPage} />
            </Router>
        </div>
    )
}

export default App
