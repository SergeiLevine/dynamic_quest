import React, { useState, useEffect } from 'react';
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

const RadioInput = ({ data, handleChange, inputs }: Props) => {
  const [other, setOther] = useState('');
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (data.conditional) {
      const conditional = data.conditional;

      setHide(formConditional({ inputs, conditional }));
    }
  }, [inputs]);

  function renderTitle() {
    return (
      <CardTitle
        key={`radio_${data.id}`}
        id={data.id}
        title={data.question}
        required={data.required}
      />
    );
  }
  // radio input with "Other" option
  function renderRadio() {
    const radio = [];

    radio.push(renderTitle());

    radio.push(
      data.data.map((item, index) => {
        return (
          <div key={`radio_${index}`}>
            <input
              className='align-center form-check-input'
              type='radio'
              name={data.name}
              id={data.name}
              value={item}
              onChange={handleChange}
              required={data.required}
            />
            <label
              className='mx-2 align-center form-check-label'
              htmlFor={data.name}>
              {item}
            </label>
          </div>
        );
      })
    );
    //if we have an option for user input we will display it
    if (data.other) {
      radio.push(
        <div key={`radio_${data.other.name}`}>
          <input
            className='align-center form-check-input'
            type='radio'
            name={data.name}
            id={data.name}
            value={other}
            onChange={handleChange}
            required={data.required}
          />
          <label
            className='mx-2 align-center form-check-label'
            htmlFor={data.name}>
            {data.other.title}
          </label>
          <input
            // had to get a little bit tricky to make it work
            type='text'
            name={data.name}
            id={data.name}
            value={other}
            onChange={(e) => {
              handleChange(e);
              setOther(e.target.value);
            }}
          />
          <div className='invalid-feedback'>Please make a selection.</div>
        </div>
      );
    }

    return (
      <Card hide={hide}>
        <>{radio}</>
      </Card>
    );
  }

  return renderRadio();
};

export default RadioInput;
