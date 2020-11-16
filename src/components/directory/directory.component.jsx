import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import * as S from './directory.styles';

const Directory = ({ sections }) => {
	return(
		<S.DirectoryMenu>
			{
				sections.map(({id, ...otherSectionProps}) => {
					return <MenuItem key={id} {...otherSectionProps} />
				})
			}
		</S.DirectoryMenu>
	);
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);