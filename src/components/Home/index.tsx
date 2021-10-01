import React, { FC, ReactElement } from 'react';

import styled from 'styled-components';

import Bg from '../../images/bg1.svg';
import Layout from '../shared/Layout';
import Group from '../../images/Group.svg';

const Banner: FC< { fun: Function } > = ( { fun } ) : ReactElement => {
    
    return (

        <BannerWrapper bg = { Bg } >
            <Layout fun= { fun } >
                <div className = 'banner-img-container'>
                    <img src={ Group } className="img-fluid" alt="Responsive image" /> 
                </div>
                <div className="a"></div>
            </Layout>
        </BannerWrapper>
        
    )
}

const BannerWrapper = styled.div< { bg: any } >`

    /* background: red; */

    background: ${props => `url(${props.bg}) no-repeat top center`};
    background-size: cover;
    background-position: center;
    /* background-repeat: no-repeat; */
    opacity: 0.99;
    min-height: 80vh;

    .banner-img-container {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`;

export default Banner;
