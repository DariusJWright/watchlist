import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: ''});
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state depending on changes to the form input
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  }

  // handle form submission
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    // clear form
    setFormState({
      username: '',
      password: ''
    });
  }

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder='Username'
          name='username'
          id='username'
          type='text'
          value={formState.username}
          onChange={handleChange}
        />
        <input
          placeholder='Password'
          name='password'
          id='password'
          type='password'
          value={formState.password}
          onChange={handleChange}
        />
        <button type='submit'>
          Submit
        </button>
        {error && <div>Login Failed Miserably</div>}
      </form>
    </main>
  )
}

export default Login;