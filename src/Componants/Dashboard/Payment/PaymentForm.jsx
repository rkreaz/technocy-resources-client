import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCart from "../../Hooks/useCart";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
// import './paymentF.css'

const PaymentForm = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [transId, setTransId] = useState()
    const stripe = useStripe();
    const [error, setError] = useState()
    const elements = useElements();
    const [cart, refetch] = useCart();
    const price = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = Number(price.toFixed(2));
    // console.log('My Total Price',totalPrice);
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();


    useEffect(() => {
        if (totalPrice > 0) {
            axiosPublic.post('/create-payment-intent', { price: totalPrice })
                .then(result => {
                    console.log(result.data.clientSecret);
                    setClientSecret(result.data.clientSecret)
                })
        }

    }, [axiosPublic, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('error', error);
            setError(error.message)
        } else {
            console.log('PaymentMethod', paymentMethod);
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.email || 'Anonymous',
                    email: user?.email || 'Anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm Error', confirmError);
            // setError(error.message)
        } else {
            console.log('paymentIntent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Trans Id', paymentIntent.id);
                setTransId(paymentIntent.id);
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(),
                    transactionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    productItemIds: cart.map(item => item.productId),
                    status: 'Pending'
                }
                const res = await axiosPublic.post('/payments', payment);
                console.log('payment saved', res.data);
                if (res.data?.paymentResult?.insertedId) {
                    refetch()
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Thank you for making the payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }

    }

    return (
        <div className="flex gap-5 mt-20 w-full">
            <div className=" w-3/4">
                <h2 className='text-center text-2xl font-bold w-full mb-10'>Pay With Card</h2>
                <form onSubmit={handleSubmit}>
                    <CardElement className="border p-3 rounded-xl border-red-600"
                        options={{
                            style: {
                                base: {
                                    fontSize: '18px',
                                    color: '#000',
                                    '::placeholder': {
                                        color: '#000',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <div className="text-center mt-12">
                        {
                            cart.length ? <button className="bg-[#F02757] text-[#fff] font-semibold p-3 rounded-lg w-1/2" type="submit" disabled={!stripe || !clientSecret}>
                                Pay $({totalPrice})
                            </button>
                                :
                                <button className="bg-[#af2243dc] text-[#c7bfbf] font-semibold p-3 rounded-lg w-1/2" type="submit" disabled>
                                    Pay $({totalPrice})
                                </button>
                        }

                        <p className="text-red-700 mt-5 text-lg font-semibold">{error}</p>
                        {
                            transId && <p className="text-green-700 mt-5 text-lg font-semibold">Your Transaction Id: {transId}</p>
                        }
                    </div>
                </form>
            </div>

            <div className="flex-1">
                <div className="lg:w-2/5 mt-2">
                    <div className='flex flex-col justify-center lg:w-[305px] bg-[#F1F3F8] text-[#000] px-5 py-10'>
                        <h2 className='text-center text-xl font-bold w-full'>Order Summary</h2>

                        <div className="flex items-center justify-between mt-12">
                            <h2 className=' text-lg font-bold'>Total Products: </h2>
                            <span>{cart.length} Item</span>
                        </div>

                        <div className="flex items-center justify-between mt-5 mb-8">
                            <h2 className=' text-lg font-bold'>Price: </h2>
                            <span>${totalPrice}</span>
                        </div>

                        <p className='border-t-2 border-red-600 pb-5 w-full'></p>

                        <div className="flex items-center justify-between mb-12">
                            <h2 className='text-lg font-bold'>Total price: </h2>
                            <span className="text-[#F02757]">${totalPrice}</span>
                        </div>

                        {/* <h2 className=' text-xl font-bold'>total price: ${totalPrice}</h2> */}
                        {/* 
                        <div className="text-center text-sm">
                            <p className='bg-[#F02757] text-[#fff] font-semibold p-3 rounded-lg'>PROCEED TO CHECKOUT ({card.length}) </p>
                        </div> */}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;