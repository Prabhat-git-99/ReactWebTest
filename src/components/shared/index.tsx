import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

type Props = {

    children: ReactElement[ ]
}

const CommonLeftWrapper: FC< Props > = ( { children } ): ReactElement => {
    
    return (
    
        <CommonLeftWrapperStyle>
            {
                children
            }
        </CommonLeftWrapperStyle>
    )
}

const CommonLeftWrapperStyle = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80vw;
    margin: 2rem auto;
    padding: 20px;
    /* border: 1px solid red; */

`;

export default CommonLeftWrapper;
