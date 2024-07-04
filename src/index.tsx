import {HashRouter} from 'react-router-dom'
import React from 'react'

import RouterHeaderImage from './RouterHeaderImage.tsx';
import RouterComponent from './RouterContent.tsx'

import { createRoot } from 'react-dom/client';

const elementRoot = document.getElementById('root');
const root = createRoot(elementRoot!);
const elementHeader = document.getElementById('headerImage')
const header = createRoot(elementHeader!)

root.render(
    <React.StrictMode>
        <HashRouter>
            <RouterComponent />
        </HashRouter>
    </React.StrictMode>        
)

header.render(
    <React.StrictMode>
        <HashRouter>
            <RouterHeaderImage />
        </HashRouter>
    </React.StrictMode>        
)
