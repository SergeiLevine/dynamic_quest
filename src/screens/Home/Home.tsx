import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchQuestionnaries } from '../../apis';
import './home.scss';

type HomeSelectQuest = {
  id: number;
  title: string;
};

const Home = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [selectVal, setSelectVal] = useState<number>(-1);
  useEffect(() => {
    fetchQuestionnaries().then((res: any) => {
      setData(res);
    });
  }, []);

  function handleChange(e: any) {
    setSelectVal(e.target.value);
  }

  return (
    <div className='homePage text-center'>
      <div className='row'>
        <div className='mt-5'>
          <h1>Home</h1>
        </div>

        <div className='mb-5'></div>
        <div className='col'></div>
        <div className='col'>
          <select
            defaultValue='-1'
            className='form-select mb-3 d-inline text-center'
            onChange={handleChange}>
            <option disabled value='-1'>
              Select questionnarie
            </option>
            {data.map((item: HomeSelectQuest) => {
              return (
                <option key={`home_select_${item.id}`} value={item.id}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className='col'></div>
        <div className='col-12'></div>
        <div className='col'></div>
        <button
          disabled={selectVal >= 0 ? false : true}
          type='button'
          className='btn btn-info col'
          onClick={() =>
            navigate(`questionaries/${selectVal}`, {
              state: data[selectVal],
            })
          }>
          Select
        </button>
        <div className='col'></div>
      </div>
    </div>
  );
};

export default Home;
