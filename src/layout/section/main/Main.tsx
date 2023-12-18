import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpeg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Svetlana Dyablo</h2>
                    <h1>A Web Developer.</h1>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    )
};

const StyledMain = styled.section`
  min-height: 100vh;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`


