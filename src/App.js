import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

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

const StyledError = styled.div`
  color: tomato;
  width: 100%;
  margin: 0.5rem 0;
`

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required()
})

function App() {

  return (
    <div className="App">
      <FormContainer>
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            consent: false,
          }}
          onSubmit={values => {
            console.log(values)
          }}
          validationSchema={validationSchema}
        >
            <Form>
              <label>
                Name:
                <Field type="text" name="name"/>
                <StyledError>
                  <ErrorMessage name="name"/>
                </StyledError>
              </label>
              <label>
                Last name
                <Field type="text" name="lastName" />
              </label>
              <label>
                Email
                <Field type="email" name="email"/>
              </label>
              <StyledError>
                  <ErrorMessage name="email"/>
                </StyledError>
              <label>
                Confirm email
                <Field type="email" name="confirmEmail"/>
              </label>
              <label>
                Password
                <Field type="password" name="password" />
              </label>
              <label>
                Confirm password
                <Field type="password" name="confirmPassword" />
              </label>
              <label>
                I agree to terms and conditions
                <Field type="checkbox" name="consent" />
              </label>
              <button type='submit'>Submit</button>
            </Form>
            </Formik>
          </FormContainer>      
    </div>
  );
}

export default App;
