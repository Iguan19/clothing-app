import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import * as S from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { imageUrl, price, name, quantity } = cartItem;
	return(
		<S.CheckoutItemContainer>
			<S.ImageContainer>
				<img src={imageUrl} alt='item' />
			</S.ImageContainer>
			<S.TextContainer>{name}</S.TextContainer>
			<S.QuantityContainer>
				<div onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItem(cartItem)}>&#10095;</div>
			</S.QuantityContainer>
			<S.TextContainer>${price}</S.TextContainer>
			<S.RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</S.RemoveButton>
		</S.CheckoutItemContainer>
	);
}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
