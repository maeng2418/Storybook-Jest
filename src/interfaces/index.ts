export interface IInputProps {
  children: React.ReactNode;
  type: 'checkbox' | 'text' | 'radio';
  placeholder?: string;
}

export interface IButtonProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  btnType?: 'default' | 'primary' | 'dashed' | 'text' | 'link';
  danger: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
