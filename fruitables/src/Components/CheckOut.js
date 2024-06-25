import React from 'react'
import './CheckOut.css'
export default function CheckOut() {
    return (
        <>
            <section class="header">
                <h1 class="headerh1">Checkout</h1>
                <p id="headerp"><a href="#">Home /</a><a href="#"> Pages /</a> Checkout</p>
            </section>

            <div className="main">
                <div className="inner1">
                    <section className="billing">
                        <h1 id='billingh1'>Billing details</h1><br />
                        <div className="billingform">
                            <label htmlFor="">First Name</label>
                            <label id='lastlabel' htmlFor="">Last Name</label><br />
                            <input className="firstname" type="text" name="" id="" />
                            <input id='lastinput' className="names" type="text" /><br />


                            <label htmlFor="">Company Name</label>
                            <br /><input className='inputs' type="text" /><br />
                            <label htmlFor="">Address</label>
                            <br /><input className='inputs' type="text" /><br />
                            <label htmlFor="">Town/City</label>
                            <br /><input className='inputs' type="text" /><br />
                            <label htmlFor="">Country</label>
                            <br /><input className='inputs' type="text" /><br />
                            <label htmlFor="">Postcode/Zip</label>
                            <br /><input className='inputs' type="text" /><br />
                            <label htmlFor="">Mobile</label>
                            <br /><input className='inputs' type="text" /><br />
                            <label htmlFor="">Email Address</label>
                            <br /><input className='inputs' type="text" /><br />
                            <input className='checkboxes' type="checkbox" /> Create an account?<br />
                            <hr />
                            <input className='checkboxes' type="checkbox" /> Ship to different address?
                            <textarea name="" id="" cols="30" rows="10"></textarea>



                        </div>



                    </section></div>
                <div className="inner2" id='innerfine'>
                    <section clasName="table">
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
                                <td>Potatos</td>
                                <td>2.99 $</td>
                                <td>increment button</td>
                                <td>2.99 $</td>
                                <td><button><i class="fa-solid fa-xmark"></i></button></td>
                            </tr>
                            <tr>
                                <td><img src="./images/featur-3.jpg" alt="" /></td>
                                <td>Awesome Brocoli</td>
                                <td>2.99 $</td>
                                <td>increment button</td>
                                <td>2.99 $</td>
                                <td><button><i class="fa-solid fa-xmark"></i></button></td>
                            </tr>
                        </table>
                    </section>
                    <br />
                    <section className="banking">
                        <p id='subtotal' className="bankp">Subtotal &nbsp;&nbsp;&nbsp;&nbsp; $414.00</p>
                       <p className='bankp' id="shipping"></p>
                        <hr />  <p className='bankp' id="total">TOTAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$135.00</p>
                        <hr /> <p id="directbank"><input type="checkbox" /> Direct Bank Transfer <br /><br />
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <hr /> <p className='bankp' id="checkpayment"><input type="checkbox" /> Check Payment</p>
                        <hr /> <p className='bankp' id="delivery"><input type="checkbox" /> Cash On Delivery</p>
                        <hr /> <p className='bankp' id="paypal"><input type="checkbox" /> Paypal</p>
                        <hr />

                        <button>PLACE ORDER</button>

                    </section>
                </div>
            </div>







        </>
    )
}
