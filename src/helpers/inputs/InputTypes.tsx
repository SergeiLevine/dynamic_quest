import React from 'react';
import { useState } from 'react';
import { RadioInput, TextInput, SelectInput } from '../../components';

import './inputTypes.scss';

type Props = {
  data: {
    id: number;
    name: string;
    question: string;
    required: boolean;
    inputType: string;
    data: [];
    conditional: { data_choice: string; conditional_name: string };
    other: { name: string; title: string };
  };
  handleChange: any;
  inputs: {};
};

const InputTypes = ({ data, handleChange, inputs }: Props) => {
  const card: JSX.Element[] = [];
  // rendering the needed component
  if (data.inputType == 'radio') {
    {
      return (
        <RadioInput data={data} inputs={inputs} handleChange={handleChange} />
      );
    }
  }

  if (data.inputType == 'text') {
    return (
      <TextInput data={data} inputs={inputs} handleChange={handleChange} />
    );
  }

  if (data.inputType == 'select') {
    return (
      <SelectInput data={data} inputs={inputs} handleChange={handleChange} />
    );
  }

  return <div></div>;
};

export default InputTypes;
