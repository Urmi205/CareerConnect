import React from 'react'
import Carouselslider from './Carouselslider'
import { productdata } from '../data'
import Productcard from './Productcard'
const Home = () => {
    return <>
        <Carouselslider />
        <div className='container mt-4'>
            <div className='row'>
                {productdata.map((x, index) => (
                    <div className='col-md-3' key={index}>
                      <Productcard item={x}/>
                    </div>
        ))}
            </div>
        </div>
        </>
}

        export default Home