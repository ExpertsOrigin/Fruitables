import React from 'react'

const Sidebar = () => {
    return (
        <>
            <section className="sidebar">

                <h2 id='catah2'>Categories</h2>
                <li className="Categoriesli"><i className="fa-solid fa-apple-whole"></i> Apples <span className="categorynumber">(5)</span></li>
                <li className="Categoriesli"><i className="fa-solid fa-apple-whole"></i> Oranges <span className="categorynumber">(5)</span></li>
                <li className="Categoriesli"><i className="fa-solid fa-apple-whole"></i> Strawberry <span className="categorynumber">(2)</span></li>
                <li className="Categoriesli"><i className="fa-solid fa-apple-whole"></i> Banana <span className="categorynumber">(8)</span></li>
                <li className="Categoriesli"><i className="fa-solid fa-apple-whole"></i> Pumpkin <span className="categorynumber">(5)</span></li>

                <h2 id='priceh2'>Price</h2>
                <input type="range" id="range" />
                <br />
                <h2 id='additionalh2'>Additional</h2>
                <input type="radio" className="radioinput" /> &nbsp;Organic <br /><br />
                <input type="radio" className="radioinput" /> &nbsp;Fresh <br /><br />
                <input type="radio" className="radioinput" /> &nbsp;Sales <br /><br />
                <input type="radio" className="radioinput" /> &nbsp;Discount <br /><br />
                <input type="radio" className="radioinput" /> &nbsp;Expired <br /><br />


                <h2 id='myfeaturedh2'>Featured Products</h2>
                <div className="featured">
                    <img src="./images/featur-1.jpg" alt="img loading" />
                    <div className="featuredtext">
                        <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"
                                id="blackstar"></i>
                        <h3>3.12 $</h3>
                    </div>
                </div>
                <div className="featured">
                    <img src="./images/featur-2.jpg" alt="img loading" />
                    <div className="featuredtext">
                        <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"
                                id="blackstar"></i>
                        <h3>3.12 $</h3>
                    </div>
                </div>
                <div className="featured">
                    <img src="./images/featur-3.jpg" alt="img loading" />
                    <div className="featuredtext">
                        <h5>Organic Tomato</h5><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"
                                id="blackstar"></i>
                        <h3>3.12 $</h3>
                    </div>
                </div>
                <button className="mybutton">View More</button>
                <br />
                <img src="./images/banner-fruits.jpg" alt="" className="sidebarimg" />

            </section>
        </>
    )
}

export default Sidebar
