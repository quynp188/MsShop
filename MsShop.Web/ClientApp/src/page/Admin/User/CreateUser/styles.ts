import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h1``;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  & > input {
    height: 20px;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
  }
  & > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600px;
    color: rgb(151, 150, 150);
  }
`;
export const Lable = styled.label``;
export const Input = styled.input``;
export const Gender = styled.div`
  & > input {
    margin-top: 15px;
  }
  & > label {
    margin: 10px;
    font-size: 15;
    color: #555;
  }
`;
export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
export const Option = styled.select``;
export const Button = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
