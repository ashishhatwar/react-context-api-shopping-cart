import React from "react";
import styles from "../styles/CartModal.module.css";
import {useValue} from '../itemContext';


function CartModal(){

        const {toggle, cart, handleReset, total} = useValue();

    return (

        <div className={styles.cartModal}>

            <div className={styles.closeButton} onClick={toggle}>
                Close
            </div>

            <div className={styles.clearButton} onClick={handleReset}>
                Clear
            </div>

            <div className={styles.itemContainer}>

                    {cart.map((item, index)=>(

                        <div className={styles.cartCard} key={index}>
                            <h1>{item.name}</h1>
                            <h3>X {item.qty}</h3>
                            <h3>&#x20B9; {item.qty * item.price}</h3>

                        </div>  


                    ))}

            </div>

            <div className={styles.total}>
            
             <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total} &#x20B9;</div>
            </div>
        </div>


    );

}

export default CartModal;