import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

import CommonLeftWrapper from '../..';
import { data } from '../../../../Data/footer';
import { PrimaryTitle } from '../../Title';


const Footer: FC = ( ): ReactElement => {

    return (
        <FooterWrapper>        
            <CommonLeftWrapper>
                <PrimaryTitle name = 'C.A.S Consulting Ltd' />
                <div className="">
                    {
                        data.emails.map( ( item: any ) => {

                            return (
                                <span>
                                    {
                                        item.email
                                    }
                                </span>
                            )

                        } )
                    }
                </div>
                <br></br>
                <div className="">
                    {
                        data.addresses.map( ( item: any ) => {

                            return (
                                <p>
                                    <span className = 'email'>
                                        { item.address }
                                    </span>
                                    <span className = 'phone'>
                                        { item.phone }
                                    </span>
                                </p>
                            )

                        } )
                    }
                </div>
            </CommonLeftWrapper>
            <div className="footer-right">
                {
                    data.signature.map( ( item: any ) => {

                        return (
                            <p>
                                { item.sign }
                            </p>
                        )
                    })
                }
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`

    background: #e7e7e744;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    p {
        padding: 0;
        margin: 0;
    }
`;

export default Footer;
