import styled from 'styled-components';

export default function Input({
  formId,
  labelText,
  placeholder,
  onChange,
  value,
  required,
}) {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={formId}>{labelText}</StyledLabel>
      <StyledInput
        value={value}
        onChange={onChange}
        type="text"
        id={formId}
        placeholder={placeholder}
        required={required}
      ></StyledInput>
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
