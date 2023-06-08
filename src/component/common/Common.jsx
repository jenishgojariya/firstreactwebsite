import React from 'react'
import Navbar from './Navbar';

const Common = (props) => {
  return (
    <>
    <Navbar/>
        <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column adjust'>
                  <h1><strong className='BrandName'>JenishGojariya</strong><br/> {props.title1}<br/>{props.title2}<br/>{props.title3}</h1>
                  <h2 className='my-3'>
                    {props.punchline}
                  </h2>
                  <div className='mt-3'>
                    <a href={props.visit} className='button-18'>{props.btname}</a>
                  </div>
                </div>
                <div className='col-md-6 pt-5 order-1 order-lg-2 header-img'>
                    <img src={props.imgsrc} className='img-fluid animated' alt='home img'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Common;
