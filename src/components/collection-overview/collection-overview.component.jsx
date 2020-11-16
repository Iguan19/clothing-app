import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import * as S from './collection-overview.styles';

const CollectionOverview = ({ collections }) => (
	<S.CollectionOverviewContainer>
		{
			collections.map(({id, ...otherCollectionProps }) => {
				return(
					<CollectionPreview key={id} {...otherCollectionProps } />
				);
			})
		}
	</S.CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);	