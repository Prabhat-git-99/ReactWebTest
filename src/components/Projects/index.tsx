import React, { FC, ReactElement } from 'react';
import CommonLeftWrapper from '../shared';
import { PrimaryTitle } from '../shared/Title';

import styled from 'styled-components';
import { data } from '../../Data/projects';
import { CardType } from '../../Type';
import Cards from '../shared/Cards';

const Projects: FC = ( ) : ReactElement => {
    return (
        <ProjectsWrapper>
        <CommonLeftWrapper>
            
            <div className="title-container">
                <PrimaryTitle name='Our Projects' />
            </div>
            <div className="sector-card-wrapper">
                <div className="row no-gutters">
                    {
                        data.map( ( item: CardType ) => {

                            return (
                                <div className="mt-5 col-xs-6 col-sm-4 col-md-4 col-lg-4">
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
        </ProjectsWrapper>
    )
}


const ProjectsWrapper = styled.div`
    /* width: 60%; */
    /* background: #F8F8F8; */
    .top-buffer {
        margin-top: 20px;
    }

`;

export default Projects;
