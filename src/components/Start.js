import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';
import PropTypes from 'prop-types';

const Menu = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 4em;
    color: #0F9ECC;
    background-color: #01012C;
    border: 1px solid #0F9ECC;
    padding: 15px 30px;
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #0F9ECC;
        }
    }
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Menu>
            <h1>Queezie</h1>
            <h4>Click on begin to start.</h4>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Menu>
    )
}

Start.propTypes = {
    props: PropTypes.bool
  };

export default Start
