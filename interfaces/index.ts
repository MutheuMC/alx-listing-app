export interface CardProps {
    title: string;
    description: string;
    image: string;
    children?: React.ReactNode;
  }
  
  export interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  