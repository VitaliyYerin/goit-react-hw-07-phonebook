import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid rgb(0, 0, 0);
  padding: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  margin: auto;
  outline: none;
  padding: 0 10px;
  width: 100px;
  height: 30px;
  background-color: #000;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    color: #fff;
    box-shadow: 2px 3px 5px rgb(17, 17, 17);
  }
`;

export const InputName = styled.input`
  margin-left: 28px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
`;

export const InputNumber = styled.input`
  margin-left: 10px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;
