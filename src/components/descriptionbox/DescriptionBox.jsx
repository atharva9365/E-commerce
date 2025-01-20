import React from 'react'
import "./descriptionbox.css"

const DescriptionBox = () => {
  return (
    <>
      <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
             <div className="descriptionbox-nav-box">Description</div>
             <div className="descriptionbox-nav-box fade">Reviews (125)</div>
        </div>
          <div className='descriptionbox-description'>
               <p>We offer a curated selection of high-quality products across categories such as fashion, 
                 electronics, home essentials, beauty, and more. Our user-friendly interface ensures a hassle-free
                 browsing and checkout experience, while secure payment options provide peace of mind. Enjoy exclusive 
                 deals, fast delivery, and responsive customer support tailored to meet your needs. Whether you're 
                 updating your wardrobe, upgrading your gadgets, or finding the perfect gift, [Shop Cart] is here
                 to make shopping convenient and enjoyable. Discover a world of possibilities at your fingertips today.</p>
          </div>
      </div>
    </>
  )
} 

export default DescriptionBox