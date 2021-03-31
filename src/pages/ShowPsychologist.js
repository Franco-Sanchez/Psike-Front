import React from 'react'
import CardShow from '../components/Containers/CardShow';
import CardSchedule from '../components/UI/CardSchedule';
import CardSpecialties from '../components/UI/CardSpecialties';

export default function ShowPsychologist() {
    return (
        <div>
            <CardShow />
            <div>
                <CardSpecialties />
                <CardSchedule />
            </div>
        </div>
    )
}
