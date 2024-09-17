import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from './Components/Connexion'
import * as serviceWorker from './serviceWorker'
import NotFound from './Components/NotFound'
//import Formulaire from './Components/Formulaire'

import { Route, BrowserRouter, Switch } from 'react-router-dom'

const Root = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} />
            <Route path='/Pseudo/:Peudo' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
