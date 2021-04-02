import React from 'react'
import CardShow from '../components/Containers/CardShow';
import CardSchedule from '../components/UI/CardSchedule';
import CardSpecialties from '../components/UI/CardSpecialties';
import ContainerComments from '../components/Containers/ContainerComments';
import { fetchShowPsychologist } from '../features/psychologist/showPsychologistSlice';
import { fetchShowAppointments } from '../features/psychologist/showAppointmentsSlice';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { css } from '@emotion/react';

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
        <StyledShow>
            <CardShow psychologist={psychologist} styles={show}/>
            <CardSpecialties specialties={psychologist.specialties || []} styles={specialties} />
            <CardSchedule schedules={schedules} appointments={appointments} styles={schedule} />
            <ContainerComments comments={psychologist.comments || []} styles={comments} />
        </StyledShow>
    )
}

const StyledShow = styled.div`
    width: 100%;
    display: grid;
    gap: 30px;
    padding-bottom: 20px;
    grid-template-areas: 
    "show        show     show"
    "specialties schedule schedule"
    "comments    comments comments";
`
const show = css`
    height: auto; 
    padding: 18px;
    grid-area: show;
`

const specialties = css`
    grid-area: specialties;
`

const schedule = css`
    grid-area: schedule;
`
const comments = css`
    grid-area: comments;
`