import styled from 'styled-components';

export default function Input({
  name,
  labelText,
  placeholder,
  onChange,
  value,
  required,
}) {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  border: 3px solid black;
  border-radius: 5px;
  margin: 15px 5px;
`;

const StyledLabel = styled.label`
  font-size: inherit;
  margin: 5px 5px;
`;

const StyledInput = styled.input`
  font-size: smaller;
  padding: 10px 0px;
  margin: 0px;
`;
