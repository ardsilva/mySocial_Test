import React from 'react';
import styled from 'styled-components';
import history from '../../history';

const StyledButton = styled.button`
    background: ${props => props.primary ? "gray" : "white"};
    color: ${props => props.primary ? "white" : "gray"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid gray;
    border-radius: 3px;
`;

function Button() {
    return (
        <StyledButton onClick={() => history.push("/")}>
            Back
        </StyledButton>
    );
}

export default Button;