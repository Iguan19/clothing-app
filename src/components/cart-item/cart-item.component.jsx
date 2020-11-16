import React from 'react';

import * as S from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<S.CartItemContainer>
		<S.CartItemImage src={imageUrl} alt='item' />
		<S.CartItemDetailsContainer>
			<span>{name}</span>
			<span>{quantity} x ${price}</span>
		</S.CartItemDetailsContainer>
	</S.CartItemContainer>
);

export default CartItem;