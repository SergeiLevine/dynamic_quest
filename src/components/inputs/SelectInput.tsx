import React, { useState, useEffect } from 'react';
import { CardTitle, Card } from '..';
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

const SelectInput = ({ data, handleChange, inputs }: Props) => {
  const [hide, setHide] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (data.conditional) {
      const conditional = data.conditional;

      setHide(formConditional({ inputs, conditional }));
    }
  }, [inputs]);

  function renderTitle() {
    return (
      <CardTitle
        key={`select_title_${data.id}`}
        id={data.id}
        title={data.question}
        required={data.required}
      />
    );
  }

  function renderSelect() {
    const select = [];

    select.push(renderTitle());

    select.push(
      <div className='' key={`select_${data.id}`}>
        <select
          id='validationCustom04'
          name={data.name}
          value={value}
          className='form-select mb-3 d-inline  select text-center fit-content'
          onChange={(e) => {
            handleChange(e);
            setValue(e.target.value);
          }}
          required={data.required}>
          <option disabled value=''>
            Choose...
          </option>
          {data.data.map((item, index) => {
            return (
              <option key={`option_${index}`} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <div className='invalid-feedback'>Please make a selection.</div>
      </div>
    );

    return (
      <Card hide={hide}>
        <>{select}</>
      </Card>
    );
  }

  return renderSelect();
};

export default SelectInput;
