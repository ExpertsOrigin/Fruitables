import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



export default function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <>


            <section className="one">
                <div className="onetext">
                    <h5 id='onetexth5'>100% Organic Foods</h5>
                    <h1 id="oneh1">Organic Veggies & Fruits Foods </h1>
                    <input type="search" />
                    <button>Submit Now</button>
                </div>
               <div className="sectioncarosel">
               <Carousel activeIndex={index} onSelect={handleSelect} className='mycarosel'>

<Carousel.Item>
    <img src="./images/hero-img-1.png" alt="" className='caroselmyimage' />
    <Carousel.Caption>
        <h3>Fruits</h3>
        
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img src="./images/hero-img-2.jpg" alt="" className='caroselmyimage' />
    <Carousel.Caption>
        <h3>Vegetables</h3>
        
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img src="./images/hero-img-1.png" alt="" className='caroselmyimage' />
    <Carousel.Caption>
        <h3>Fruits</h3>
        
    </Carousel.Caption>
</Carousel.Item>
</Carousel>
               </div>

            </section>


            <section className="two">
                <div className="twoin">
                    <div className="twoinicon"><i className="fa-solid fa-car-side"></i></div>
                    <h2>Free Shipping</h2>
                    <p className="twoinp">
                        Free on order over $300
                    </p>
                </div>
                <div className="twoin">
                    <div className="twoinicon"><i className="fa-solid fa-user-shield"></i></div>
                    <h2>Free Shipping</h2>
                    <p className="twoinp">
                        100% security payment
                    </p>
                </div>
                <div className="twoin">
                    <div className="twoinicon"><i className="fa-solid fa-arrow-right-arrow-left"></i></div>
                    <h2>Free Shipping</h2>
                    <p className="twoinp">
                        30 day money guarantee
                    </p>
                </div>
                <div className="twoin">
                    <div className="twoinicon"><i className="fa-solid fa-phone"></i></div>
                    <h2>Free Shipping</h2>
                    <p className="twoinp">
                        Support every time fast
                    </p>
                </div>

            </section>


            <section className="three">
                <div className="threein1">
                    <div id="threeinh1">
                        <h1>Our Organic Products</h1>
                    </div>
                    <div id="threein-button">
                        <button>All
                            Products</button><button>Vegetables</button><button>Fruits</button><button>Bread</button><button>Meat</button>
                    </div>
                </div>
                <div className="threein2">
                    <div className="cards">
                        <div className="zoom"><img id='img1' src="./images/fruite-item-5.jpg" alt="image loading" /></div>
                        <h2>Grapes</h2>
                        <p className='cardsp'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="price">$4.99 / kg</h3>
                        <button className="card-buttons"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="cards">
                        <div className="zoom"> <img src="./images/fruite-item-5.jpg" alt="image loading" /></div>

                        <h2>Grapes</h2>
                        <p className='cardsp'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="price">$4.99 / kg</h3>
                        <button className="card-buttons"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="cards">
                        <div className="zoom"><img src="./images/fruite-item-2.jpg" alt="image loading" /></div>

                        <h2>Raspberries</h2>
                        <p className='cardsp'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="price">$4.99 / kg</h3>
                        <button className="card-buttons"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="cards">
                        <div className="zoom"><img src="./images/fruite-item-4.jpg" alt="image loading" /></div>

                        <h2>Apricots</h2>
                        <p className='cardsp'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="price">$4.99 / kg</h3>
                        <button className="card-buttons"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="cards">
                        <div className="zoom"><img src="./images/fruite-item-3.jpg" alt="image loading" /></div>

                        <h2>Banana</h2>
                        <p className='cardsp'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="price">$4.99 / kg</h3>
                        <button className="card-buttons"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="cards">
                        <div className="zoom"><img src="./images/fruite-item-1.jpg" alt="image loading" /></div>

                        <h2>Oranges</h2>
                        <p className='cardsp'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="price">$4.99 / kg</h3>
                        <button className="card-buttons"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="cards">
                        <div className="zoom"> <img src="./images/fruite-item-2.jpg" alt="image loading" /></div>

                        <h2>Raspberries</h2>
                        <p className='cardsp'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="price">$4.99 / kg</h3>
                        <button className="card-buttons"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="cards">
                        <div className="zoom">  <img src="./images/fruite-item-5.jpg" alt="image loading" /></div>

                        <h2>Grapes</h2>
                        <p className='cardsp'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="price">$4.99 / kg</h3>
                        <button className="card-buttons"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                </div>

            </section>


            <section className="four">
                <div className="four-cards">
                    <div className="fourimg"><img src="./images/featur-1.jpg" alt="img loading" />

                        <div className="empty1">
                            <div className="empty1-text" id="freshapple">
                                <h3>Fresh Apples</h3>
                                <h2 id='emptyh2'>20% OFF</h2>
                            </div>
                        </div>

                    </div>
                    <div className="fourimg" id='strawberry' ><img src="./images/featur-2.jpg" alt="img loading" />
                        <div className="empty2">
                            <div className="empty1-text" id="tasty">
                                <h3>Tasty Fruits</h3>
                                <h2 id='emptyh2'>Free Delivery</h2>
                            </div>
                        </div>

                    </div>
                    <div className="fourimg" id='discount'><img src="./images/featur-3.jpg" alt="img loading" />
                        <div className="empty3">
                            <div className="empty1-text" id="exotic">
                                <h3>Exotic Vegitables</h3>
                                <h2 id='emptyh2'>Discount 30$</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="five">
                <h1 className="fiveh1">Fresh Organic Vegetables</h1>
                <div className="fivein">
                    <div className="fresh"><img src="./images/vegetable-item-3.png" alt="image loading" />
                        <h2 className="freshh2">Parsely</h2>
                        <p className="freshp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="freshprice">$4.99 / kg</h3> <button><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="fresh"><img src="./images/vegetable-item-1.jpg" alt="image loading" />
                        <h2 className="freshh2">Parsely</h2>
                        <p className="freshp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="freshprice">$4.99 / kg</h3> <button><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="fresh"><img src="./images/vegetable-item-4.jpg" alt="image loading" />
                        <h2 className="freshh2">Parsely</h2>
                        <p className="freshp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="freshprice">$4.99 / kg</h3> <button><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="fresh"><img src="./images/vegetable-item-5.jpg" alt="image loading" />
                        <h2 className="freshh2">Parsely</h2>
                        <p className="freshp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <h3 className="freshprice">$4.99 / kg</h3> <button><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                </div>




            </section>


            <section className="six">
                <div id="sixtext">
                    <h1 id="sixh1">Fresh Exotic Fruits</h1>
                    <h2 id="sixh2">in Our Store</h2>
                    <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                        words etc.</p>
                    <button>BUY</button>
                </div>
                <div id="siximg">
                    <span>150$ kg</span>
                    <img src="./images/baner-1.png" alt="image loading" />
                </div>
            </section>



            <section className="seven">
                <h1 id="sevenh1">Bestseller Products</h1>
                <p id="seven_p">Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                    reasonable.</p>

                <div className="upperseven">
                    <div className="tomato"><img src="./images/fruite-item-1.jpg" alt="img loading" />
                        <div className="seventext">
                            <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                            <h3>3.12 $</h3><button><i className="fa-solid fa-lock"></i> Add to cart</button>
                        </div>
                    </div>
                    <div className="tomato"><img src="./images/fruite-item-2.jpg" alt="img loading" />
                        <div className="seventext">
                            <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                            <h3>3.12 $</h3><button><i className="fa-solid fa-lock"></i> Add to cart</button>
                        </div>
                    </div>
                    <div className="tomato"><img src="./images/fruite-item-3.jpg" alt="img loading" />
                        <div className="seventext">
                            <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                            <h3>3.12 $</h3><button><i className="fa-solid fa-lock"></i> Add to cart</button>
                        </div>
                    </div>
                    <div className="tomato"><img src="./images/fruite-item-4.jpg" alt="img loading" />
                        <div className="seventext">
                            <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                            <h3>3.12 $</h3><button><i className="fa-solid fa-lock"></i> Add to cart</button>
                        </div>
                    </div>
                    <div className="tomato"><img src="./images/fruite-item-5.jpg" alt="img loading" />
                        <div className="seventext">
                            <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                            <h3>3.12 $</h3><button><i className="fa-solid fa-lock"></i> Add to cart</button>
                        </div>
                    </div>
                    <div className="tomato"><img src="./images/fruite-item-6.jpg" alt="img loading" />
                        <div className="seventext">
                            <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                            <h3>3.12 $</h3><button><i className="fa-solid fa-lock"></i> Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="lowerfour">
                    <div className="lowertomato"><img src="./images/fruite-item-1.jpg" alt="img loading" />
                        <h3>Organic Tomato</h3><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                        <h4 className="lowertomatoh4">3.12 $</h4><button className="lowerfourbtn"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="lowertomato"><img src="./images/fruite-item-2.jpg" alt="img loading" />
                        <h3>Organic Tomato</h3><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                        <h4 className="lowertomatoh4">3.12 $</h4><button className="lowerfourbtn"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="lowertomato"><img src="./images/fruite-item-3.jpg" alt="img loading" />
                        <h3>Organic Tomato</h3><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                        <h4 className="lowertomatoh4">3.12 $</h4><button className="lowerfourbtn"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                    <div className="lowertomato"><img src="./images/fruite-item-4.jpg" alt="img loading" />
                        <h3>Organic Tomato</h3><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star" id="blackstar"></i>
                        <h4 className="lowertomatoh4">3.12 $</h4><button className="lowerfourbtn"><i className="fa-solid fa-lock"></i> Add to cart</button>
                    </div>
                </div>


            </section>

            <section className="eight">
                <div className="eightin"><i className="fa-solid fa-user-group"></i>
                    <p className="eightp">SATISFIED CUSTOMERS</p>
                    <h2 className="eighth2">1963</h2>
                </div>
                <div className="eightin"><i className="fa-solid fa-user-group"></i>
                    <p className="eightp">QUALITY OF SERVICE</p>
                    <h2 className="eighth2">99%</h2>
                </div>
                <div className="eightin"><i className="fa-solid fa-user-group"></i>
                    <p className="eightp">QUALITY CERTIFICATES</p>
                    <h2 className="eighth2">33</h2>
                </div>
                <div className="eightin"><i className="fa-solid fa-user-group"></i>
                    <p className="eightp">AVAILABLE PRODUCTS</p>
                    <h2 className="eighth2">789</h2>
                </div>
            </section>


            <section className="nine">
                <h4 id="testimonial">Our Testimonial</h4>
                <h1 id="saying">Our Client Saying!</h1>
                <div className="clients">
                    <img src="./images/client.png" alt="img loading" />
                    <img src="./images/client.png" alt="img loading" />
                </div>
            </section>



        </>
    )

}
