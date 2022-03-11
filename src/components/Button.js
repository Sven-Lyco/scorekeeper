import styled from 'styled-components';

export default function Button({ children, onClick, isDark }) {
  return (
    <ButtonStyled isDark={isDark} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: ${({ isDark }) => (isDark ? '#444' : '#ddd')};
  color: ${({ isDark }) => (isDark ? 'white' : 'inherit')};
  font-size: inherit;
  font-family: inherit;
  width: 100%;
  border: 3px solid black;
  border-radius: 25px;
  padding: 8px 12px;
  margin: 15px auto;
`;
