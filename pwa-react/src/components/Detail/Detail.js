// Detail.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  justify-content: space-evenly;
  width: 50%;
  display: flex;

  @media(max-width: 767px) {
    margin: auto 25%;
    display: block;
  }
`;

const Image = styled.img`
  border: 3px solid;
  border-radius: 15px;

`;

const ContentImage = styled.div`
`;

const ContentDetails = styled.div`
`;

const P = styled.p`
`;

function Detail({ id, picture, name, age, email }) {
  return (
    <Container>
        <ContentImage>
            <Image alt={id} src={picture}/>
        </ContentImage>
        <ContentDetails>
            <P>{"Name: "}{name}</P>
            <P>{"Age: "}{age}</P>
            <P>{"Email: "}{email}</P>
        </ContentDetails>
    </Container>
  );
}
export default Detail;