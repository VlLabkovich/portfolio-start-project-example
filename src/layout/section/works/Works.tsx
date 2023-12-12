import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'
import {Menu} from "../../../components/menu/Menu";
import {Work} from "./work/Work";


const workItems = ['All','landing page','React','spa'];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Menu menuItems={workItems} />
            <FlexWrapper justify={'space-around'}>
                    <Work title={'Social Network'}
                          src={socialImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Work title={'Timer'}
                          src={timerImg}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                    />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  background-color: #43d4e8;
  min-height: 100vh;
`;

const Photo = styled.img`
  width: 500px;
  min-height: 500px;
  object-fit: cover;
`
const StyledWork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  
`