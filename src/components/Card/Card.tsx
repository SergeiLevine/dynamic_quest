import React from 'react';
// import './card.scss';

type Props = {
  children: JSX.Element;
  hide?: boolean;
};

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
