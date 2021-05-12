import React from 'react';
import styled, { css } from 'styled-components/macro'
import { Button } from './Button'
import PropTypes from 'prop-types';

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
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

const GameOver = ({ pts }) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>Results</Title>
            <Points>You did {pts} out of 5!</Points>
            <Button onClick={refreshPage} css={btnCSS}>Retry</Button>
        </>
    )
}

GameOver.propTypes = {
    pts: PropTypes.string
};

export default GameOver
