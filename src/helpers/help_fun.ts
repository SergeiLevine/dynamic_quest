import React from 'react';

type Props = {
  inputs: {};
  conditional: {
    data_choice: string;
    conditional_name: string;
  };
};

export function formConditional({ inputs, conditional }: Props) {
  const input: any = inputs;

  if (conditional) {
    const { conditional_name, data_choice } = conditional;
    if (input[conditional_name] == data_choice) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}
