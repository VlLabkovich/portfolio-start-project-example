import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledText>{props.description}</StyledText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`

const IconWrapper = styled.div`
position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        transform: rotate(45deg) translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.10);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    
}
`
const StyledTitle = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin: 70px 0 15px;

    letter-spacing: 1px;
    text-transform: uppercase;
`
const StyledText = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
`