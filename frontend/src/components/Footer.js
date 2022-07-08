import React from 'react';
import { Link } from "react-router-dom";


export default function Footer() {

    const styles = {

        smallIcon: {
          width: 18,
          height: 18,
          marginRight: 10
        }       
      };

    let year = new Date();

    return (
        <footer>
            <div className="footer-links">
                <Link to="/">Your Account</Link>
                <Link to="/">Your Orders</Link>
                <Link to="/">Wish List</Link>
                <Link to="/">Returns</Link>
                <Link to="/">Return Policy</Link>
                <Link to="/">Refund Policy</Link>
                <Link to="/">Cancellation Policy</Link>
                <Link to="/">Customer Service</Link>
            </div>

            <div className="copyright">
                
                
            </div> 
        </footer>
    )
}
