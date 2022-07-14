import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import { Home, CreateProject, DetailProject } from '../'
import { Header, Footer } from '../../components/index_com';
import { tw } from 'https://cdn.skypack.dev/twind'

const MainApp = () => {
    return(
        <div className={tw`h-screen flex flex-col `}>
            
            <Header />
            
            <div className={tw`flex-1`}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/create-project"><CreateProject /></Route>
                        <Route path="/detail-project"><DetailProject /></Route>
                        <Route path="/"><Home /></Route>
                    </Switch>
                </BrowserRouter>
            </div>

            <Footer />
            
        </div>
    )
}

export default MainApp;