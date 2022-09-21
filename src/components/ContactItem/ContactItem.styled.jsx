import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: #fff;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  margin-left: 30px;
`;

export const ContactSpan = styled.span``;

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
