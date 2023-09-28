import React from 'react';

import Catalog from '../../components/catalog/Catalog';
import Wrapper from '../../components/wrapper/Wrapper';

const MainPage = () => {
    return (
        <div>
            <Wrapper>
                <Catalog /> 
            </Wrapper>
        </div>
    );
}

export default MainPage;
