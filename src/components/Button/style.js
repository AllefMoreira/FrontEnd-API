import styled from 'styled-components'

export const Container = styled.button `
    width: 100%;
    height: 56px;
    
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px; 
    border: 0;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    font-weight: 500;

    //O & Refere-se ao componente que ele está dentro
    &:disabled{
        opacity: 0.5;
    }
`;