import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  color: rgba(255, 255, 255, 0.4);
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${props => props.hasError ? 'rgba(255, 80, 80, 0.6)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  padding: 12px 14px;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 300;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    border-color: ${props => props.hasError ? 'rgba(255, 80, 80, 0.8)' : 'rgba(255, 255, 255, 0.35)'};
  }
`;

export const ErrorText = styled.span`
  color: rgba(255, 80, 80, 0.8);
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 300;
`;
