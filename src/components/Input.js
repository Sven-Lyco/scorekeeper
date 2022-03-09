import styled from 'styled-components';

export default function Input({ labelText, placeholder }) {
  return (
    <Wrapper>
      <StyledLabel>{labelText}</StyledLabel>
      <StyledInput placeholder={placeholder}></StyledInput>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
`;

const StyledLabel = styled.label`
  margin: 5px 5px;
`;

const StyledInput = styled.input`
  font-size: large;
  border: 2px solid #ddd;
  padding: 10px;
  margin: 0px;
`;
