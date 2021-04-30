import styled from "styled-components";
export const ButtonContainer= styled.button`
    text-transform: capitalize;
    font-size:1.4rem;
    background: transparent;
    border: .05rem solid lightBlue;
    border-color: ${props=>props.cart?"yellow":"lightBlue"};
    color: ${props=>props.cart?"yellow":"lightBlue"};
    border-radius: .5rem;
    padding: .2rem .5rem;
    cursor: pointer;
    margin: .2rem .5rem .2rem 0;
    transition: all .5s;
    &:hover{
        background: ${props=>props.cart?"yellow":"lightBlue"};
        color: blue;
    }
    &:focus{
        outline: none;
    }
`;