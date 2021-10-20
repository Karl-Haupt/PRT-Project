import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import { clearErrors } from '../../Redux/Actions/userActions';

const options = {
    style: {
        fontSize: '16px'
    },
    invalid: {
        color: '#9e2146'
    }
}

const Payment = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();

    const { user, error } = useSelector(state => state.auth);
    // let totalPrice = 19;

    useEffect(() => {

        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, error])

    const order = { 
        totalPrice: 19,
    }

    const userDetails = user && user._id

    const paymentData = {
        amount: Math.round(order.totalPrice * 100),
        user: userDetails
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        document.querySelector('#pay_btn').disabled = true;

        let res;
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
                
            }

            res = await axios.post('/api/v1/payment/process', paymentData, config);

            const clientSecret = res.data.client_secret;

            if(!stripe || !elements) return;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email
                    }
                }
            });

            if(result.error) {
                alert.error(result.error.message);
                document.querySelector('#pay_btn').disabled = false;
            } else {
                //The payment is processed or not
                if(result.paymentIntent.status === 'succeeded') {
                    console.log("Success");
                    order.paymentInfo = {
                        id: result.paymentIntent.id, 
                        status: result.paymentIntent.status
                    }

                    // dispatch(createPaymentDetails(order));
                    history.push('/');
                } else {
                    alert.error('There is some inssue while payment processing');
                }
            }


        } catch(error) {
            document.querySelector('#pay_btn').disabled = false;
            console.log(error.stackTrace);
            alert.error(error.response.data.message);
        }
    }

    return (
        <div class="container">
        <div class="title">
            <div class="title-text">Payment Page</div>
        </div>
        <div class="form-container">
            <div class="form-inner">
                <form action="#" class="payment">
                <div className="form-group">
                    <label htmlFor="card_num_field">Card Number</label>
                    <CardNumberElement
                        type="text"
                        id="card_num_field"
                        className="form-control"
                        options={options}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="card_exp_field">Card Expiry</label>
                    <CardExpiryElement
                        type="text"
                        id="card_exp_field"
                        className="form-control"
                        options={options}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="card_cvc_field">Card CVC</label>
                    <CardCvcElement
                        type="text"
                        id="card_cvc_field"
                        className="form-control"
                        options={options}
                    />
                </div>
    
                    <div class="field">
                        <a href="#">
                        <input type="submit" value="submit"/>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Payment
