import styled from "styled-components"

export const Container = styled.div`
    margin: 8.875rem 19rem 4.9375rem 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #201D1D 0%, rgba(32, 29, 29, 0.2) 100%);
    border-radius: 2rem;

    .button-submit {
        color: #FFFFFF;
        font-family: 'Nunito', sans-serif;
        font-weight: 500;
        font-size: 1.125rem;
        background: #33DDA7;
        padding: 1.75rem 5rem;
        margin: 0 0 1rem 0;
    }
`

export const ToggleWrapper = styled.div`
    
    display: flex;
    align-items: center;

    .description {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.125rem;
        color: #FFFFFF;
    }

    .switch > .hidden-toggle {
        display: none;
    }

    .switch > .slider {
        background: #e0e2db;
        border: 0.1rem solid #bbb;
        cursor: pointer;
        border-radius: 2rem;
        transition: all 300ms ease-in-out;
        width: 2rem;
        height: 1rem;
        position: relative;
        box-shadow: inset -0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.1);
      }

    .switch > .slider > .button {
        content: "";
        position: absolute;
        width: 0.85rem;
        height: 0.85rem;
        background: #9747FF;
        top: .25rem;
        left: 0.4rem;
        transition: all 300ms ease-in-out;
        border-radius: 50%;
        z-index: 2;
        box-shadow: inset -0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
    }

    .switch > .hidden-toggle:checked ~ .slider {
        background: ##EFF4F9;
        box-shadow: inset 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(50, 0, 150, 0.2);
    }
      
    .switch > .hidden-toggle:checked ~ .slider > .button {
        left: 1rem;
        box-shadow: inset 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
        background: #4CE03F;
      }
`

export const FormContent = styled.form`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`

export const InputLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3.93rem 4.18rem 4.81rem 4.18rem;
    width: 50%;

    #doble-input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap: 1.5rem;
        
        div {
            width: 100%;
        }
    }

    label, input, #doble-input {
        margin-top: 0.875rem;
    }

    input {
        padding-left: .55rem;
    }
`

export const MidiaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 3.93rem 4.18rem 4.81rem 4.18rem;

    label {
        margin-top: 0.875rem;
    }
`

export const SocialContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    column-gap: 2.2rem;

    .social-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        input{
            padding-left: .55rem;
        }
    }
    
`

export const CategoryContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .category-item {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    padding: .2rem 4rem 4rem 4rem;
    
`