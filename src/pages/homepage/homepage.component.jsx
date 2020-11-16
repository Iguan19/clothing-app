import React from 'react';

import Directory from '../../components/directory/directory.component';

import * as S from './homepage.styles';

const HomePage = () => {
	return(
	<S.HomePageContainer>
		<Directory />
	</S.HomePageContainer>
	);
}

export default HomePage;