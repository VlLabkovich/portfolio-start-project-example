import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
    max-width: 500px;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
    display: inline-block;
    margin: 22px 0 42px 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
`

const Pagination = styled.span`
    display: flex;
    justify-content: center;

    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.50);

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}