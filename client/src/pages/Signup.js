import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations'; 
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', password: ''});
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state depending on changes to the form input
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // handle form submission
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }

    // clear form
    setFormState({
      username: '',
      password: ''
    });
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder='Username...'
          name='username'
          id='username'
          type='text'
          value={formState.username}
          onChange={handleChange}
        />
        <input
          placeholder='Password...'
          name='password'
          id='password'
          type='password'
          value={formState.password}
          onChange={handleChange}
        />
        <button className='btn' type='submit'>
          Signup
        </button>
        {error && <div>Task Failed Miserably</div>}
      </form>
    </div>
  )
}

export default Signup;