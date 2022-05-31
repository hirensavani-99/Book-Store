

import StripeCheckout from 'react-stripe-checkout';

import { useSelector, useDispatch } from 'react-redux';
import { delCart, updateItemQuantity } from '../../redux/action/index'

import classes from '../Description/Description.module.css'
import Table from "react-bootstrap/Table";
import logo from '../../assets/logo.jpg'
export default function Cart() {


    //setting up stripe api
    const onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert("We are in business, ${ data.email }");
            });
        });
    }


    const dispatch = useDispatch()
    const cartData = useSelector(state => state.handleCart)


    let price = 0;

    if (cartData.length !== 0) {
        cartData.map(book => price += (book.pages / 10 * book.qty))
    }



    return (
        <div className="py-4 container" >

            <div className="row justify-content-center">
                <div className="col-12">

                    {cartData.length !== 0 && <h3>total {cartData.length} items</h3>}
                    <Table className="table table-light table-hover m-0">

                        <tbody>
                            {cartData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img alt="" src={item.cover_image !== '' ? item.cover_image : logo} height="80px" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{(item.pages / 10 * item.qty)}$</td>
                                        <td>Quantity ({item.qty})</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    dispatch(updateItemQuantity(item, '-'))
                                                }
                                                className="btn btn-info ms-2"
                                            >
                                                -
                                            </button>
                                            <button
                                                onClick={() => {
                                                    dispatch(updateItemQuantity(item, '+'));
                                                }}
                                                className="btn btn-info ms-2"
                                            >
                                                +
                                            </button>
                                            <button
                                                className="btn btn-danger ms-2 my-2"
                                                onClick={() => {
                                                    dispatch(delCart(item))
                                                }}
                                            >
                                                remove
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
                {cartData.length === 0 && <h1 className="text-center">Cart Empty</h1>}
                {cartData.length !== 0 && <h1 className="text-center">Total Price:{price}$</h1>}
                {cartData.length !== 0 && <button onClick={onToken} className={classes.button}><StripeCheckout
                    token={onToken}
                    text="order now"
                    stripeKey="pk_test_51K6yIdAy7KDVZHoTFOdUB6sRjyJBNhvqKha7UAcn5cKmyy1zxyQlF7nCdkVvvpqCm52VRoHZsPbZhEJlVXNTnu7N00paEBKEL2"
                /></button>}

            </div>
        </div>
    );
}
