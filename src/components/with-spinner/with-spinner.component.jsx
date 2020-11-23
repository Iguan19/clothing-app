import React from 'react';

import * as S from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <S.SpinnerOverlay>
            <S.SpinnerContainer />
        </S.SpinnerOverlay>
    ) : (
        <WrappedComponent { ...otherProps } />
    )    
}

export default WithSpinner;