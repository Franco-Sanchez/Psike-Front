import React, { useState } from 'react'
import CardShow from '../components/Containers/CardShow';
import CardSchedule from '../components/UI/CardSchedule';
import CardSpecialties from '../components/UI/CardSpecialties';
import ContainerComments from '../components/Containers/ContainerComments';
import { fetchShowPsychologist } from '../features/psychologist/showPsychologistSlice';
import { fetchShowAppointments } from '../features/psychologist/showAppointmentsSlice';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function ShowPsychologist() {
    const psychologistStatus = useSelector(state => state.showPsychologist.status);
    const appointmentsStatus = useSelector(state => state.showAppointments.items);
    const psychologist = useSelector(state => state.showPsychologist.single);
    const schedules = useSelector((state) => state.showPsychologist.schedules);
    const appointments = useSelector((state) => state.showAppointments.items);
    const dispatch = useDispatch();
    const pshychologistId = useParams();

    if(psychologistStatus === 'idle') {
        dispatch(fetchShowPsychologist({ id: parseInt(pshychologistId.id) }))
    }

    if(appointmentsStatus === 'idle') {
        dispatch(fetchShowAppointments({ id: parseInt(pshychologistId.id) }))
    }

    return (
        <div>
            <CardShow psychologist={psychologist} />
            <MiddleContainer>
                <CardSpecialties specialties={psychologist.specialties || []} />
                <CardSchedule schedules={schedules} appointments={appointments} />
            </MiddleContainer>
            <ContainerComments comments={psychologist.comments || []} />
        </div>
    )
}

const MiddleContainer = styled.div`
    display: flex;
    gap: 30px;
    margin: 30px 0;
`