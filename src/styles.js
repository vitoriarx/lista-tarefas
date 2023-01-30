import styled from 'styled-components';
//estilização aqui 



export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 60px;
   text-align: center;
   padding: 50px 36px;
   height: 200vh;
   
`;
export const Image = styled.img`
    width: 200px;
    margin-top: 30px;
    
`;

export const ContainerItens = styled.div`
    background-color: gray;
    width: 400px;
    height: 800vh;
    color: white;
    border-radius: 30px;

`;

export const H1= styled.h1`
    margin-bottom: 60px;
`;


export const Input= styled.input`
    width: 300px;
    height: 50px;
    border: 2px #FF8303 solid;
    border-radius: 10px;
    &::placeholder{
        color: gray;
        padding: 10px;
    }
    outline: none;
    margin-bottom: 30px;
    padding: 10px;
`;



export const Button = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    background-color: #FF8303;
    border-radius: 15px;
    color: #F0E3CA;
    font-size: 20px;
    cursor: pointer;
    &:hover{
    opacity: 0.8;
}
    &:active{
    opacity: 0.5;
}

`;

export const Tarefa = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba( 255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
    border-radius: 14px;
    width: 400px;
    height: 60px;
    border: none;
    outline: none;
    margin-top: 30px;
    
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: white;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;    }
    
`;

