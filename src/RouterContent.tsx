import {Routes, Route} from 'react-router-dom'
import React from 'react';

import BioContent from './components/BioContent.tsx';
import PhotosContent from './components/PhotosContent.tsx';
import PortfolioContent from './components/PortfolioContent.tsx'

const BASE_PATH: string = '/Sum24-FeWD'

class RouterComponent extends React.Component{
  render(){
    return (
        <>
            <Routes>
                <Route path = {BASE_PATH} element={<BioContent />} />
                <Route path = "./Sum23-FeWD/photos" element={<PhotosContent />} />
                <Route path = "./Sum24-FeWD/portfolio" element={<PortfolioContent />} />
            </Routes>
        </>
    )
}  
}

export default RouterComponent;