import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { CardTitle, Card } from '../';
import { formConditional } from '../../helpers';

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

const TextInput = ({ data, handleChange, inputs }: Props) => {
  const [placeholder, setPlaceholder] = useState();
  const [hide, setHide] = useState(false);
  const [value, SetValue] = useState('');

  const input: any = inputs;

  useEffect(() => {
    setPlaceholder(data.data.shift());
  }, []);

  useEffect(() => {
    if (data.conditional) {
      const conditional = data.conditional;

      setHide(formConditional({ inputs, conditional }));
    }
  }, [inputs]);

  function renderTitle() {
    return (
      <CardTitle
        key={data.id}
        id={data.id}
        title={data.question}
        required={data.required}
      />
    );
  }

  function renderText() {
    const text = [];

    text.push(renderTitle());

    text.push(
      <div className='input_margin' key={`text_${data.id}`}>
        <input
          type='text'
          className='form-control'
          name={data.name}
          id={data.name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            handleChange(e);
            SetValue(e.target.value);
          }}
          required={data.required}
        />
        <div className='invalid-feedback'>Please fill in the field.</div>
      </div>
    );

    return (
      <Card hide={hide}>
        <>{text}</>
      </Card>
    );
  }

  return renderText();
};

export default TextInput;
