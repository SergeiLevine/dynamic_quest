import React from 'react';

type Props = {
  id: number;
  title: string;
  required: boolean;
};

const CardTitle = ({ id, title, required }: Props) => {
  return (
    <div key={`title_${id}`}>
      <h6>
        {title}
        {required ? <span className='text-danger'> * </span> : undefined}
      </h6>
    </div>
  );
};
export default CardTitle;
