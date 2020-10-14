import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Landing from './pages/landing'
import OrphanageMap from './pages/orphanageMap'

function Routes (){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/orfanatos" component={OrphanageMap}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes