import React from 'react';
// import './card.scss';

type Props = {
  children: JSX.Element;
  hide?: boolean;
};
//we needed the option for conditional fields to be displayed only on specific selection
const Card = ({ children, hide }: Props) => {
  return (
    <div
      className={`card text-start shadow-sm p-3 mb-2 bg-white ${
        hide ? 'd-none' : ''
      }`}>
      {children}
    </div>
  );
};

export default Card;
