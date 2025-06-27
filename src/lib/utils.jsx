import React from 'react'
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const utils = (...inputs) => {
  return twMerge(clsx(inputs));
}

export default utils
