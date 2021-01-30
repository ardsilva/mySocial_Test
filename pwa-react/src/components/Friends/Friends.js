//Friends.js
import React, { useState } from 'react';
import styled from 'styled-components'; 
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Detail from '../Detail/Detail';
import { useLocation } from "react-router-dom";

const Profil = styled.div`
`;

const Body = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`;

const Title = styled.div`
    width: 33.333%;
    text-align: left;
    font-weight: bold;
    font-size: x-large;
    margin: 20px 10px;
`;


function Friends() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  let profile = location.data;
  return (
      <>
        <Header search={setSearch} />
        <Profil>
            {
                profile &&
                <Detail 
                id={profile.id}
                picture={profile.picture}
                name={profile.name}
                age={profile.age}
                eyeColor={profile.eyeColor}
                company={profile.company}
                email={profile.email}
                profile={profile}
              />
            }
        </Profil>
        <Title>Friends :</Title>
        <Body>
          {
            profile && profile.friends
              .filter(el => el.name.toLowerCase().includes(search))
              .map((i) => { return (
              <Profile 
                id={i.id}
                picture={i.picture}
                name={i.name}
                age={i.age}
                eyeColor={i.eyeColor}
                company={i.company}
                email={i.email}
                profile={i}
              />
            )}
            )
          }
        </Body>
    </>
  );
}
export default Friends;