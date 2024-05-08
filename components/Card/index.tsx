import { ReactNode } from "react";

interface CardProps { 
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-gray-400 py-14 px-12 shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;