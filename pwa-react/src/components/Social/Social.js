// Social.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import { consumirAPIPOST } from '../../utils/request';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';

const SocialContainer = styled.div`
  background-color: #fafafa;
`;

const Body = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`;

function Social() {
  const [card, setCard] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    const query = `
      {
        users
        {
          picture
          name
          age
          eyeColor
          company
          email
          friends 
          {
            picture
            name
            age
            eyeColor
            company
            email
          }
        }
      }
    `.replace(/\n/g, " ");
    consumirAPIPOST(query).then(res => setCard(res));
  }, []);


  return (
      <SocialContainer>
        <Header search={setSearch} />
        <Body>
          {
            card && card
              .filter(el => el.name.toLowerCase().trim().includes(search.trim()))
              .map((i) => { return (
              <Profile 
                key={i.id}
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
      </SocialContainer>
  );
}
export default Social;