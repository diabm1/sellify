import React from "react";

function CartPage() {
    return (
        <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
              </h3>
              <div>
                Price
              </div>
       
        
         
                <div>
                  Cart is empty
              </div>
             
                    <div className="cart-image">
                      <img/>
                    </div>
                    <div className="cart-name">
                      <div>
                    
    
                      </div>
                      <div>
                        Qty:
                      <select>
                          
                        </select>
                        <button>
                          Delete
                        </button>
                      </div>
                    </div>
                    <div>
                    </div>
                  </li>
                
      
          </ul>
    
        </div>
        <div className="cart-action">
          <h3>
            Subtotal
          </h3>
          <button>
            Proceed to Checkout
          </button>
    
        </div>
    
      </div>
    )
}

export default CartPage;