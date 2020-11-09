import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => (
	<div className="collection-overview">
		{
			collections.map(({id, ...otherCollectionProps }) => {
				return(
					<CollectionPreview key={id} {...otherCollectionProps } />
				);
			})
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);	