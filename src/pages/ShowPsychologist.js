import React from 'react'
import CardShow from '../components/Containers/CardShow';
import CardSchedule from '../components/UI/CardSchedule';
import CardSpecialties from '../components/UI/CardSpecialties';
import CardComment from '../components/UI/CardComment';
import styled from '@emotion/styled';

export default function ShowPsychologist() {
    return (
        <div>
            <CardShow />
            <MiddleContainer>
                <CardSpecialties />
                <CardSchedule />
            </MiddleContainer>
            <ContainerComments>
                <CardComment />
            </ContainerComments>
        </div>
    )
}

const MiddleContainer = styled.div`
    display: flex;
    gap: 30px;
    margin: 30px 0;
`

const ContainerComments = styled.div`
    
` 