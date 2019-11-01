import React, {Component} from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import styled from 'styled-components'; 

import Pricing from '../../../src/assets/welcomeback.png'

// styling and image imports
import '../../styles/scss/CheckoutForm.scss'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) console.log("Purchase Complete!")
  }

  // styled components for stripe component
  StripeStyle = styled(CardElement)`
  	  margin: 0 auto; 
	  border: 1px solid red;
	  width: 400px; 
  `

  render() {
    return (
      <div className="checkout">
		<h2>Inspiring kids, learning better!</h2>
		<h3>Teaching kids to code with fun!</h3>
		<div className="body-container">
			<div className="form-container">
				<label className="email">Email
					<input type="text" className="email"/>
				</label>
				<p className="select-plan"><span><b>Select a membership</b></span><br />Don't worry, you can always change this later.</p>
				<div className="radio-container">
					<div className="monthly-container">
						<input type="radio" id="monthly-id" className="monthly" name="plan-radio" />
						<label htmlFor="monthly-id" class="sub-label"> Monthly - $4.99 per month</label>
					</div>
					<div className="yearly-container">
						<input type="radio" id="yearly-id" className="yearly" name="plan-radio" />
						<label htmlFor="yearly-id" class="sub-label">Yearly - $49.99 per year</label>
					</div>
				</div>
			</div>
			<img src={Pricing} alt="pricing models" class="pricing" />
		</div>

		<div className="card-info-container">
			<img src='' alt="" className="accepted-cards" />
			<this.StripeStyle style={this.cardElementStyles} />	
		</div>
		<div className="select-membership">
			<p className="selected-membership">Selected Membership</p>
			<p className="price">$49.99</p>
			<hr/>
			<p className="total">Total: $49.99</p>
		</div>
		<div className="checkout-btn-container">
			<p className="legal">By signing up, you agree to the Project Firefly <u>Terms of Service</u> and <u>Privacy Policy</u>.</p>
			<button onClick={this.submit} className="checkout-btn">Checkout</button>
		</div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);