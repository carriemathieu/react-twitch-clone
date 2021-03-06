import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'

import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

const App = () => {
    return <div>
        <BrowserRouter>
            <div>
                <Header />
                <Route path = "/" exact component={StreamList}/>
                <Route path = "/streams/new" component={StreamCreate}/>
                <Route path = "/streams/edit" component={StreamEdit}/>
                <Route path = "/streams/delete" component={StreamDelete}/>
                <Route path = "/streams/show" component={StreamShow}/>
            </div>
        </BrowserRouter>
    </div>
}

export default App

