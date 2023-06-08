import React from 'react'

const Card = ({imgsrc,title,content}) => {
  return (
    <>
              <div className='col-md-4 col-10 mx-auto'>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={imgsrc} className="card-img-top" alt={title} />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href='https://google.com' className="btn btn-primary">Learn more...</a>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Card