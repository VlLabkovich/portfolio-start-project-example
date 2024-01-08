import {theme} from "../../styles/Theme";
import styled from "styled-components";
import {font} from "../../styles/Common";


const Footer = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    //font-family: 'Josefin Sans', sans-serif;
    //font-size: 22px;
    //font-weight: 700;
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`
    list-style: none;
`

const SocialLink = styled.a`
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.10);
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent}; // установка цвета иконок (установить в файле icons-sprite в SocialLink в свойстве fill: currentColor)
    
    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px); // для поднятия ссылки вверх указывается отрицательное  значение
    }
`

const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}