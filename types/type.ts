/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; 
}