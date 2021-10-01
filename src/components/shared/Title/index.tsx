import React, { FC, ReactElement } from 'react';

import styled from 'styled-components';

type Props = {

    name: string
}

export const PrimaryTitle: FC< Props > = ( { name } ): ReactElement => {

    return (

        <PrimaryTitleWrapper>
            <h3 className = 'primary-title'>
                { name }
            </h3>
        </PrimaryTitleWrapper>
    );

}

const PrimaryTitleWrapper = styled.div`

    .primary-title {
        font-size: 20px;
        font-weight: bold;
    }

`;