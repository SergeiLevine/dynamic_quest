import React from 'react';

type Props = {
  inputs: {};
  conditional: {
    data_choice: string;
    conditional_name: string;
  };
};
//based on the structure of out api response and what "name" and its "value"
// and if it fits our conditional we will display the card
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
