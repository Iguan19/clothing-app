import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import * as S from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<S.CartDropdown>
		<S.CartItems>
			{
				cartItems.length ?
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) 
				:
				<S.EmptyMessage>Your cart is empty</S.EmptyMessage>
			}
		</S.CartItems>
		<CustomButton style={{marginTop: "auto"}} onClick={() => {
			history.push('/checkout');
			dispatch(toggleCartHidden());
		}}>
			GO TO CHECKOUT
		</CustomButton>
	</S.CartDropdown>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));