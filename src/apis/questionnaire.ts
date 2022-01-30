const SERVER = 'http://localhost:8000';

const requestOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'React Hooks PUT Request Example' }),
};
// get specific questionnarie
const fetchQuestionnarie = async (id: string | undefined) => {
  try {
    const response = await fetch(SERVER + `/questionnaries/${id}`);

    if (!response.ok) {
      const message = `An error has occured: ${response.status} - ${response.statusText}`;
      throw new Error(message);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
// get all questionnaries
const fetchQuestionnaries = async () => {
  try {
    const response = await fetch(SERVER + `/questionnaries`);

    if (!response.ok) {
      const message = `An error has occured: ${response.status} - ${response.statusText}`;
      throw new Error(message);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
// post the answer to the db with company id so we could distinguish to what company the answers related
const postAnswers = async (inputs: {}) => {
  try {
    const response = await fetch(SERVER + `/responders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status} - ${response.statusText}`;
      throw new Error(message);
    }

    const resp = await response.json();

    return resp;
  } catch (error) {
    return error;
  }
};

export { fetchQuestionnarie, fetchQuestionnaries, postAnswers };
