import React, { FC, ReactElement } from 'react';
import CommonLeftWrapper from '../shared';
import { PrimaryTitle } from '../shared/Title';

import styled from 'styled-components';
import { data } from '../../Data/members';
import { CardType } from '../../Type';
import Cards from '../shared/Cards';

const Member: FC = ( ) : ReactElement => {
    return (
        <MemberWrapper>
        <CommonLeftWrapper>
            
            <div className="title-container">
                <PrimaryTitle name='We are Members of' />
            </div>
            <div className="sector-card-wrapper">
                <div className="row no-gutters">
                    {
                        data.map( ( item: CardType ) => {

                            return (
                                <div className="mt-5 col-xs-6 col-sm-4 col-md-2 col-lg-2">
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
        </MemberWrapper>
    )
}


const MemberWrapper = styled.div`
    /* width: 60%; */
    .top-buffer {
        margin-top: 20px;
    }

`;

export default Member;
