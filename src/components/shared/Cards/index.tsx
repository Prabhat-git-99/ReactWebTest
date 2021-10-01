import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {

    name?: string,
    image: string,
    cardType: string

}

const Cards: FC< Props > = ( { name, image, cardType } ) => {

    return (

        <CardsWrapper image = { image } >
            <div className={`card bg-light text-dark ${ cardType } `}>
                <img className="card-img" src={ image } alt="Example" />
                {
                    cardType === 'enggCard' &&
                    <h5>{ name }</h5>
                }
                {
                    cardType === 'projectCard' &&
                    <div className="card-img-overlay d-flex">
                    <h5 className="p align-self-center mx-auto text-white" data-fancybox>
                        { name }
                    </h5>  
                    </div>
                }

            </div>
        </CardsWrapper>
    
    )

}

const CardsWrapper = styled.div< { image: string } >`

    h5 {
        margin-top: 10px;
    }
    .enggCard {
        border: none;
    }

    .projectCard {
    }

    .brandCard {
        outline: none;
        background: transparent;
        border: none;
    }
    
    .p h5 {
        text-transform: uppercase;
    }

`;

export default Cards;
