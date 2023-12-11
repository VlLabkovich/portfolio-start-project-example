import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledText>{props.description}</StyledText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 30%;
  margin: 10px;
  border: 3px solid green;
  background-color: aquamarine;
`
const StyledTitle = styled.h3`
  border: 3px dashed red;
`
const StyledText = styled.p`
  border: 4px double yellow;
`