import React from 'react'
import "./Shop.css"
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
export default function Shop() {
    return (
        <>


            <section className="header">
                <h1 className="headerh1">Shop</h1>
                <p id="headerp"><Link to="/shop">Home /</Link><Link to="/shop"> Pages /</Link> Shop</p>
            </section>

            <h1 className="sidebarh1">Fresh fruits shop</h1>
            <input type="search" id="sidebarsearch" /><i className="fas fa-search" id="sidebarsearchicon"></i>
            <div id='mysidebar'>

                <Sidebar />


                <div className="mynest">

                    <div className="mynestcards"><img src="./images/fruite-item-5.jpg " alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>
                    <div className="mynestcards"><img src="./images/fruite-item-5.jpg  " alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>
                    <div className="mynestcards"><img src="./images/fruite-item-2.jpg " alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>
                    <div className="mynestcards"><img src="./images/fruite-item-4.jpg " alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>
                    <div className="mynestcards"><img src="./images/fruite-item-3.jpg " alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>
                    <div className="mynestcards"><img src="./images/fruite-item-1.jpg " alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>
                    <div className="mynestcards"><img src="./images/fruite-item-1.jpg " alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>
                    <div className="mynestcards"><img src="./images/fruite-item-5.jpg" alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>
                    <div className="mynestcards"><img src="./images/fruite-item-1.jpg " alt="img loading" /><h2 className="mynesth2">Grapes</h2><p className="mynestp">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p><h3 className="mynestprice">$4.99 / kg</h3><button className="mynestbtn"> <i class="fa-solid fa-lock"></i>Add to cart</button></div>






                </div>

            </div>

            <div className="paging">
                <button className="pagination">&lt;&lt;</button>
                <button className="pagination">1</button>
                <button className="pagination">2</button>
                <button className="pagination">3</button>
                <button className="pagination">4</button>
                <button className="pagination">5</button>
                <button className="pagination">6</button>
                <button className="pagination">&gt;&gt;</button>
            </div>







        </>
    )
}
