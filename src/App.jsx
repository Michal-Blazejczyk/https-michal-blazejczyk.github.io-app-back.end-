import React from "react";
/* import {HashRouter as Router} from 'react-router-dom'; */

/* import AsideMenu from "./commponents/AsideMenu/AsiadeMenu"; */
/* import Content from './commponents/Content/Content'; */
import Header from "./commponents/Header/Header";
import StoreProvider from "./store/storeProvider";


import './App.scss';

const App = () => (

    <StoreProvider>
            <Header/>
    </StoreProvider>
            
           
    
);
export default App;