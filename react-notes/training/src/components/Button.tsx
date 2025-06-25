import type React from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: 'primary' | 'secondary' | 'teriary'
  fullWidth?: boolean;
}

export const Button = ({text, variant, fullWidth = false, ...props}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    // size !== 'medium' && styles[size],
    // className
  ].filter(Boolean).join(' ');
  
  return <button className={buttonClasses} {...props}>{text}</button>
}