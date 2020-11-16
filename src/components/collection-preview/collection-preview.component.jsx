import React from 'react';

import * as S from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
	return(
		<S.CollectionPreviewContainer>
			<S.Title>{title.toUpperCase()}</S.Title>
			<S.Preview>
				{
					items
						.filter((item, idx) => idx < 4)
						.map((item) => {
							return(
									<CollectionItem key={item.id} item={item} />
							);
						})
				}
			</S.Preview>
		</S.CollectionPreviewContainer>
	);
}

export default CollectionPreview;