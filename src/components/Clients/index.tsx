import React, { FC, ReactElement } from 'react';
import CommonLeftWrapper from '../shared';
import { PrimaryTitle } from '../shared/Title';

import styled from 'styled-components';
import { data } from '../../Data/clients';
import { CardType } from '../../Type';
import Cards from '../shared/Cards';

const Client: FC = ( ) : ReactElement => {
    return (
        <ClientWrapper>
        <CommonLeftWrapper>
            
            <div className="title-container">
                <PrimaryTitle name='Our Clients' />
            </div>
            <div className="sector-card-wrapper">
                <div className="row no-gutters">
                    {
                        data.map( ( item: CardType ) => {

                            return (
                                <div className="mt-5 col-xs-4 col-sm-3 col-md-2 col-lg-2">
                                    <Cards name = { item.name } image = { item.image }
                                        cardType = { item.cardType } 
                                    />
                                </div>            
                            )
                        } )
                    }
                </div>
            </div>
        </CommonLeftWrapper>
        </ClientWrapper>
    )
}


const ClientWrapper = styled.div`
    /* width: 60%; */
    .top-buffer {
        margin-top: 20px;
    }

`;

export default Client;
