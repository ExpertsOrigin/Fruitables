import React from 'react'
import './ShopDetails.css'
import Sidebar from "../Components/Sidebar"
import Description from "../Components/Description"
import Review from "../Components/Review"

export default function ShopDetails() {
  return (
    <>

      {/* @@@@@@  Section  = brocoli details  @@@@@@   */}
      <div className="detailsouter">


        <section className="brocolidetails">
          <div className="product">
            <img src="./images/single-item.jpeg" alt="" />
            <div className="colitext">
              <h2 className="brocolih1">Brocoli</h2>
              <h3 className="brocolicategory">Category: Vegetables</h3>
              <h3 className="coliprice">3,35 $</h3>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"
                id="blackstar"></i>
              <p className="colip1">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
              <p className="colip1">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>

              <button><i class="fa-solid fa-lock"></i> Add to cart</button>
            </div>
          </div>

          {/* @@@@@@@@@@@@  div = review @@@@@@@@@@@@ */}

          <div className="review">
            <button className='reviewbtn'><a href="./Description"></a>Description</button>
            <button className='reviewbtn'><a href="./Review"></a>Review</button></div><hr />


          <div className="reply">
            <h2>Leave a Reply</h2>
            <input type="text" className="yourname" placeholder='Your Name' />
            <input type="text" id='text2' className="yourname" placeholder='Your Email Name' />
            <textarea name="" placeholder='Your Review' id="" cols="30" rows="10"></textarea>
            <span id='ratespan'>Please rate: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
            <button>Post Comment</button>
          </div>













        </section>

        <div className="detailsidebar">
          <Sidebar />
        </div>


      </div>

      <div className="shopcards">
        <div className="shopcardsdetails">
          <img src="./images/vegetable-item-6.jpg" alt="" />
          <h2 className="showh2">Parsely</h2>
          <p className="shocardsp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum </p>
          <h2 id='i1h2' className="price">$7.99 / kg</h2>
          <button><i class="fa-solid fa-lock"></i> Add to cart</button>
        </div>
        <div className="shopcardsdetails">
          <img src="./images/vegetable-item-6.jpg" alt="" />
          <h2 className="showh2">Parsely</h2>
          <p className="shocardsp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum </p>
          <h2 id='i1h2' className="price">$7.99 / kg</h2>
          <button><i class="fa-solid fa-lock"></i> Add to cart</button>

        </div>
        <div className="shopcardsdetails">
          <img src="./images/vegetable-item-1.jpg" alt="" />
          <h2 className="showh2">Parsely</h2>
          <p className="shocardsp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum </p>
          <h2 id='i1h2' className="price">$7.99 / kg</h2>
          <button><i class="fa-solid fa-lock"></i> Add to cart</button>

        </div>
        <div className="shopcardsdetails">
          <img src="./images/vegetable-item-3.png" alt="" />
          <h2 className="showh2">Parsely</h2>
          <p className="shocardsp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum </p>
          <h2 id='i1h2' className="price">$7.99 / kg</h2>
          <button><i class="fa-solid fa-lock"></i> Add to cart</button>

        </div>




      </div>





    </>
  )
}
