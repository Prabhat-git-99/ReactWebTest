import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import Header from './Navbar/index';

type Props = {

    children: ReactElement[ ],
    fun: Function
}

const Layout: FC< Props > = ( { children, fun } ): ReactElement => {

    

    return (
    
        <LayoutWrapper>
            <Header fun= { fun } />
            {
                children
            }        
        </LayoutWrapper>
    
    )

}

const LayoutWrapper = styled.div`

    width: 100vw;
   
    
`;

export default Layout;

