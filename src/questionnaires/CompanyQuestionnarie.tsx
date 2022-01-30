import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Card } from '../components';
import { InputTypes } from '../helpers';
import { fetchQuestionnarie, postAnswers } from '../apis';
import { useState } from 'react';
import { useRef } from 'react';
import './questionnarie.scss';

type Questions = {
  id: number;
  name: string;
  question: string;
  required: boolean;
  inputType: string;
  data: [];
  conditional: { data_choice: string; conditional_name: string };
  other: { name: string; title: string };
};

type LocationState = {
  data: {};
};

const CompanyQuestionnarie = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState(Object);
  const [inputs, setInputs] = useState({});

  const ref = useRef(null);

  const questionnarie = useLocation().state as LocationState;
  // if we comming from homepage we receiving the data from state
  // but if the user has a link to the questionnarie we will make api call to fetch the data
  useEffect(() => {
    if (questionnarie) {
      setData(questionnarie);
    } else {
      fetchQuestionnarie(id).then((res: any) => {
        setData(res);
      });
    }
  }, []);

  function goBack() {
    navigate('/');
  }
  // saving all the answers
  function handleChange(e: any) {
    setInputs((state) => ({
      ...state,
      company: id,
      [e.target.name]: e.target.value,
    }));
  }
  // on submit we adding errors for required fields that were not submitted
  // and when the form is valid we are saving the data
  function handleSubmit(e: any) {
    e.preventDefault();

    const form_valid = Array.prototype.slice
      .call(ref.current)
      .filter((elem) => {
        const filter =
          elem.name.length > 0 &&
          elem.required &&
          elem.closest('.d-none') === null &&
          !elem.checkValidity();

        filter
          ? elem.classList.add('is-invalid')
          : elem.classList.remove('is-invalid');

        return filter;
      });
    if (!(form_valid.length > 0)) {
      postAnswers(inputs);
      navigate('/');
    }
  }
  // title
  function renderTitleCard() {
    return (
      <Card>
        <div>
          <div className='main-card bg-info mb-3'></div>
          <h1>{data.title}</h1>
          <div>
            <span>Show me what you got</span>
          </div>
          <div>
            <span className='text-danger'>*Required</span>
          </div>
        </div>
      </Card>
    );
  }
  // InputTypes component making the choice what input component will be displayed baset on api response
  function renderCards() {
    return data?.questions?.map((item: Questions, index: number) => {
      return (
        <InputTypes
          key={`input_types${item.id}`}
          data={item}
          inputs={inputs}
          handleChange={handleChange}
        />
      );
    });
  }
  return (
    <div className='questionnariePage'>
      <div className={'container mw40 pt-5'}>
        <form
          className='needs-validation'
          noValidate
          onSubmit={(e) => handleSubmit(e)}
          ref={ref}>
          {renderTitleCard()}
          {renderCards()}
          <div className='text-end'>
            <button className='btn btn-info m-1' type='submit'>
              Submit
            </button>
            <button
              className='btn btn-danger m-1'
              type='button'
              onClick={goBack}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyQuestionnarie;
