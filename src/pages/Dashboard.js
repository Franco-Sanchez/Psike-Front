import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ContentL, ContentM, ContentS } from '../components/text/Content'
import { Heading1, Heading3 } from '../components/text/Heading'
import Avatar from '../components/UI/Avatar'
import CardDashBoard from '../components/UI/CardDashBoard'
import { fetchQuotes } from '../features/quotes/quotesSlice'
import { killToken } from '../features/session/sessionSlice'
import { killSign } from '../features/signup/signSlice'

export default function Dashboard(){
    const dispatch = useDispatch();
    const quotes = useSelector((state) => state.quotes.items);
    const userName = useSelector((state)=>state.signup.name);
    const userLastName = useSelector((state)=>state.signup.lastname);
    const token = sessionStorage.getItem("token");
    const state = useSelector((state)=>state.quotes.status);
    function kill(){
       return (dispatch(killToken()),dispatch(killSign()));
    }

    if(state=="idle"){
       dispatch(fetchQuotes(token))
    }

    useEffect(()=>{
        console.log(quotes);
        console.log(userName);
        console.log(userLastName);
    })
    return (
        <DashboardStyled>

            <DashboardHeader>

                <DashLogout>
                    <Avatar url = "https://sites.google.com/site/imagenesdecarrosgratis/_/rsrc/1421516636272/home/carros-deportivos-lamborghini-aventador-tron_aventador.jpg"/>
                    <ContentLogout>
                        <ContentL>{userName} {userLastName}</ContentL>
                        <Link to = "/login" onClick={()=>dispatch(kill())}><ContentS>Logout</ContentS></Link>
                    </ContentLogout>
                </DashLogout>

            </DashboardHeader>

            <DashboardUser>
                <DashUserData>
                  <Heading1>HOLA,</Heading1><Heading1>{userName}</Heading1>
                </DashUserData>
                <ContentM>nos encanta tenerte de nuevo por aqui.</ContentM>
            </DashboardUser>

            <Heading3>Tus proximas citas son:</Heading3>

            <div>
                {
                  quotes.filter((q)=> Date.parse(q.date) >= Date.now()
                  )
                  .map((quo)=>{
                      return <CardDashBoard name = {quo.psychologist.name} date = {quo.date} hora = {(Date.parse((quo.schedule.hour.start_hour)))} reazon={quo.reason}/>
                  })
                }
                {/* {quotes.map((quo)=>{
                    quo.psychologist.map((q)=>{
                        <CardDashBoard name={q.name}/>
                    })
                     
                })} */}
               
            </div>

        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
width:100%;
height:auto;
border:1px solid black;
`
const DashboardHeader = styled.div`
width:100%;
height:auto;
display:flex;
justify-content:flex-end;
align-items:flex-end;
border:1px solid black;
`
const DashLogout = styled.div`
display:flex;
width:auto;
height:auto;
gap:10px;
`
const ContentLogout = styled.div`
display:flex;
flex-direction:column;
border:1px solid black;
padding: 5px 0px;
`
const DashboardUser = styled.div`
display:flex;
flex-direction:column;
border:1px solid black;
`
const DashUserData = styled.div`
display:flex;
gap:10px;
`