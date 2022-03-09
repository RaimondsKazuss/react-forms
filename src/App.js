import { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 12rem;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

function App() {
  const [formState, setFormState] = useState({
    name: '',
    lastName: ''
  })

  console.log(formState);

  
  return (
    <div className="App">
      <FormContainer>
        <form>
          <label>
            Name:
            <input type="text" value={formState.name} onChange={(event => setFormState({...formState, name: event.target.value}))}/>
            <input type="text" value={formState.lastName} onChange={(event => setFormState({...formState, lastName: event.target.value}))}/>
            
          </label>
          
        </form>  
      </FormContainer>      
    </div>
  );
}

export default App;
