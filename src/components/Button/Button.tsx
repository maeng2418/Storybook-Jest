import React from 'react';
import styled, { css } from 'styled-components';
import { IButtonProps } from '../../interfaces';

// 공통된 스타일
const buttonStyles = css`
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  background: none;
`;

const StyledButton = styled.button<{ danger?: boolean }>`
  ${buttonStyles}
  border: 1px solid #d9d9d9;
  background-color: #fff;
  &:hover {
    ${({ danger }) =>
      danger
        ? css`
            color: #ff4d4f;
            border: 1px solid #ff4d4f;
          `
        : css`
            color: #1890ff;
            border: 1px solid #1890ff;
          `}
  }
`;

const StyledPrimary = styled.button<{ danger?: boolean }>`
  ${buttonStyles}
  color: #fff;
  ${({ danger }) =>
    danger
      ? css`
          background-color: #ff4d4f;
          &:hover {
            background-color: #fff;
            color: #ff4d4f;
            border: 1px solid #ff4d4f;
          }
        `
      : css`
          background-color: #1890ff;
          &:hover {
            background-color: #fff;
            color: #1890ff;
            border: 1px solid #1890ff;
          }
        `}
`;

const StyledDashed = styled.button<{ danger?: boolean }>`
  ${buttonStyles}
  border: 1px dashed #d9d9d9;
  background-color: #fff;
  &:hover {
    ${({ danger }) =>
      danger
        ? css`
            color: #ff4d4f;
            border: 1px dashed #ff4d4f;
          `
        : css`
            color: #1890ff;
            border: 1px dashed #1890ff;
          `}
  }
`;

const StyledText = styled.button<{ danger?: boolean }>`
  ${buttonStyles}
  background: none;
  border: none;
  ${({ danger }) =>
    danger &&
    css`
      color: #ff4d4f;
    `}
`;

const StyledLink = styled.button<{ danger?: boolean }>`
  ${buttonStyles}
  ${({ danger }) =>
    danger
      ? css`
          color: #ff4d4f;
        `
      : css`
          color: #1890ff;
        `}
`;

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  switch (props.btnType) {
    case 'default':
      return <StyledButton {...props}>{children}</StyledButton>;
    case 'primary':
      return <StyledPrimary {...props}>{children}</StyledPrimary>;
    case 'dashed':
      return <StyledDashed {...props}>{children}</StyledDashed>;
    case 'text':
      return <StyledText {...props}>{children}</StyledText>;
    case 'link':
      return <StyledLink {...props}>{children}</StyledLink>;
    default:
      return <StyledButton {...props}>{children}</StyledButton>;
  }
};
