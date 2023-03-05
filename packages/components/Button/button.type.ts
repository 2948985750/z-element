export interface ButtonProps {
  type?: 'primary' | 'success' | 'info' | 'wraning' | 'danger' | 'plain' | 'text';
  size?: 'default' | 'small' | 'large';
  disabled?: boolean;
  action?: 'button' | 'submit' | 'reset';
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  bg?: boolean;
  color?: string;
}

export interface ButtonBinding {
  block: {
    element(str: string, ...modifier: string[]): string;
    modifier(...args: string[]): string;
  };
  defaultProps: ButtonProps;
}
