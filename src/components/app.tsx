import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'

import Home from '../routes/home'
import About from '../routes/about'
import NotFoundPage from '../routes/notfound'
import Header from './header'

const App: FunctionalComponent = () => {
    return (
        <div id="root">
            <Header />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/about/" component={About} user="me" />
                <Route path="/about/:user" component={About} />
                <NotFoundPage default />
            </Router>
        </div>
    )
}

export default App
