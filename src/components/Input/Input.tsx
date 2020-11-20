import React from 'react';
import styled, { css } from 'styled-components';
import { IInputProps } from '../../interfaces';

// 공통된 스타일
const inputStyles = css`
  outline: none;
  box-sizing: border-box;
  background: none;
`;

const StyledText = styled.input`
  ${inputStyles}
  border-radius: 2px;
`;

const StyledCheckbox = styled.input`
  ${inputStyles}
`;

const StyledRadio = styled.input`
  ${inputStyles}
`;

export const Input: React.FC<IInputProps> = ({ ...props }) => {
  switch (props.type) {
    case 'text':
      return <StyledText {...props} />;
    case 'radio':
      return <StyledRadio {...props} />;
    case 'checkbox':
      return <StyledCheckbox {...props} />;
    default:
      return <StyledText {...props} />;
  }
};

Input.defaultProps = {
  type: 'text',
};
