import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import * as S from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
	const { name, price, imageUrl } = item;
	return(
		<S.CollectionItemContainer>
			<S.CollectionItemImage className="image" imageUrl={imageUrl} />
			<S.CollectionItemFooter>
				<S.CollectionItemName>{name}</S.CollectionItemName>
				<S.CollectionItemPrice>{`${price}$`}</S.CollectionItemPrice>
			</S.CollectionItemFooter>
			<S.AddButton onClick={() => addItem(item)} inverted> Add to cart </S.AddButton>
		</S.CollectionItemContainer>
	);
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);