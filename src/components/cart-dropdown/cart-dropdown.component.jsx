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
	<S.CartDropdownContainer>
		<S.CartItemsContainer>
			{
				cartItems.length ?
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) 
				:
				<S.EmptyMessageContainer>Your cart is empty</S.EmptyMessageContainer>
			}
		</S.CartItemsContainer>
		<CustomButton style={{marginTop: "auto"}} onClick={() => {
			history.push('/checkout');
			dispatch(toggleCartHidden());
		}}>
			GO TO CHECKOUT
		</CustomButton>
	</S.CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));