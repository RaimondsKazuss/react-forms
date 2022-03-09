import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 16rem;
  margin: auto;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;

  input {
    height: 1.5rem;
    width: 100%;
  }
`

function App() {
  const [formState, setFormState] = useState({
    name: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    consent: false,
  })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }
  
  return (
    <div className="App">
      <FormContainer>
        <form>
          <label>
            Name:
            <input type="text" value={formState.name} onChange={(event => setFormState({...formState, name: event.target.value}))}/>
          </label>
          <label>
            Last name
            <input type="text" value={formState.lastName} onChange={(event => setFormState({...formState, lastName: event.target.value}))}/>
          </label>
          <label>
            Email
            <input type="email" value={formState.email} onChange={(event => setFormState({...formState, email: event.target.value}))}/>
          </label>
          <label>
            Confirm email
            <input type="email" value={formState.confirmEmail} onChange={(event => setFormState({...formState, confirmEmail: event.target.value}))}/>
          </label>
          <label>
            Password
            <input type="password" value={formState.password} onChange={(event => setFormState({...formState, password: event.target.value}))}/>
          </label>
          <label>
            Confirm password
            <input type="password" value={formState.confirmPassword} onChange={(event => setFormState({...formState, confirmPassword: event.target.value}))}/>
          </label>
          <label>
            I agree to terms and conditions
            <input type="checkbox" checked={formState.consent} value={formState.consent} onChange={(event => setFormState({...formState, consent: event.target.checked}))}/>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>  
      </FormContainer>      
    </div>
  );
}

export default App;
