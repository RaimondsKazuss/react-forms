import styled from 'styled-components';

const FormContainer = styled.div`
  width: 12rem;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

function App() {
  return (
    <div className="App">
      <FormContainer>
        <form>
          <input type="text"/>
        </form>  
      </FormContainer>      
    </div>
  );
}

export default App;
