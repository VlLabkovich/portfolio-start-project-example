import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    width: 100%; // ширина поля ввода равно ширине формы, поля подстраиваются под размер формы
    padding: 7px 15px;

    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    
    color: ${theme.colors.font};

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`

export const S = {
    Contacts,
    Form,
    Field
}