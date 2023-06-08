import React from 'react'
import Footer from '../common/Footer'
// import Common from '../Common'
import Navbar from '../common/Navbar'
import Card from './ForService/Card'
import Sdata from './ForService/Sdata'

const Services = () => {
  return (
    <>
    <Navbar/>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {Sdata.map(function(value,index){
              return <Card
                key={index}
                {...value}
              />
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/> 
    </>
  )
}

export default Services