import React, { useState  } from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    msg: '',
  });

  const getFormData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    // Submit the form or perform any other necessary actions
  };

  return (
    <>
    <Navbar/>
      <section id='contact'>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={onFormSubmit} action='/' method='post'>
              <div className='mb-3'>
                <input
                  onChange={getFormData}
                  name='fullname'
                  value={formData.fullname}
                  placeholder='Full Name'
                  required
                  type='text'
                  className='form-control'
                  id='FullName'
                />
              </div>
              <div className='mb-3'>
                <input
                  onChange={getFormData}
                  name='email'
                  value={formData.email}
                  placeholder='Email Address'
                  required
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='mb-3'>
                <input
                  onChange={getFormData}
                  name='password'
                  value={formData.password}
                  placeholder='Password'
                  required
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='mb-3'>
                <textarea
                  onChange={getFormData}
                  name='msg'
                  value={formData.msg}
                  placeholder='Share your Experience'
                  className='form-control'
                />
              </div>
              <div className='col-12'>
                <button type='submit' className='button-18'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
