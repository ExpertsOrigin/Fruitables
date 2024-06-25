import React from 'react'
import './Cart.css'
export default function Cart() {
    return (
        <>
            <section class="header">
                <h1 class="headerh1">Cart</h1>
                <p id="headerp"><a href="#">Home /</a><a href="#"> Pages /</a> Cart</p>
            </section>

            <div className="cartmain">


                <section class="table">
                    <table>
                        <thead>
                            <th>Products</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Handle</th>
                        </thead>

                        <tr>
                            <td><img src="./images/vegetable-item-3.png" alt="" /></td>
                            <td>Big Banana</td>
                            <td>2.99 $</td>
                            <td>increment button</td>
                            <td>2.99 $</td>
                            <td><button><i class="fa-solid fa-xmark"></i></button></td>
                        </tr>
                        <tr>
                            <td><img src="./images/vegetable-item-5.jpg" alt="" /></td>
                            <td>Big Banana</td>
                            <td>2.99 $</td>
                            <td>increment button</td>
                            <td>2.99 $</td>
                            <td><button><i class="fa-solid fa-xmark"></i></button></td>
                        </tr>
                        <tr>
                            <td><img src="./images/featur-3.jpg" alt="" /></td>
                            <td>Big Banana</td>
                            <td>2.99 $</td>
                            <td>increment button</td>
                            <td>2.99 $</td>
                            <td><button><i class="fa-solid fa-xmark"></i></button></td>
                        </tr>
                    </table>







                </section>
                {/*  cart section*/}
                <div class="coupon">
                    <input type="text" placeholder="Coupon Code" /> <button>Apply Coupon</button>
                </div>
                <div className="cartcoupon">
                <div className="pagescart">
                    <h1>Cart Total</h1>
                    <span class="totalh3">Subtotal:</span> <div class="carttext">$ 96.00</div>
                    <br />
                    <span class="totalh3">shipping</span> <div class="carttext" id='flat'>Flat rate: $3.00
                        Shipping to Ukraine.</div>
                    <hr />
                    <span class="totalh3">Total</span>
                    <div class="carttext">$ 99.0</div>
                    <hr />
                    <button class="cartbtn">PROCEED CHECKOUT</button>
                </div>
                </div>


            </div>

        </>
    )
}
