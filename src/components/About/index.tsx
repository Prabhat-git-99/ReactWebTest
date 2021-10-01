import React, { FC, ReactElement } from 'react';
import CommonLeftWrapper from '../shared';
import { PrimaryTitle } from '../shared/Title';

import styled from 'styled-components';

const About: FC = ( ) : ReactElement => {
    return (

        <CommonLeftWrapper>
            <div className="title-container">
                <PrimaryTitle name='C.A.S Consulting Ltd' />
            </div>
            <AboutWrapper>
            <p>
                C.A.S Consulting Ltd is an independent engineering consultancy 
                office established in 2012 specializing in Electrical, Mechanical and Energy Building Services. 
            </p>
            </AboutWrapper>
        </CommonLeftWrapper>
    )
}


const AboutWrapper = styled.p`
    width: 60%;

`;

export default About;
