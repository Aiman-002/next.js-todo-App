
"use client";

import { ReactNode } from 'react';
import { useRef } from 'react';     


export interface formProps {
    children: ReactNode;
    action: (formData: FormData) => void;
    className?: string;
    onSubmit?: () => void;
}

import React, { Children } from 'react'

const Form = ({children,action,className,onSubmit}: formProps ) => {
    const ref = useRef<HTMLFormElement>(null);

  return ( 
  
  <form 
    action={async(formData) => {
    await action(formData);
    ref.current?.reset();

  }} 
  
  onSubmit={onSubmit} 
  ref={ref}>
    
    {children}</form>

  );
  
};

export default Form;
