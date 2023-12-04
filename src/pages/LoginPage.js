import React from 'react';
import {useState} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import{signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from '../utils/firebase-config';
import {useNavigate} from 'react-router-dom';


const LoginPage = () => {
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const navigate = useNavigate();


const handleLogin = async()=>{
  try{ 
  await signInWithEmailAndPassword(firebaseAuth,email,password)
  }catch(error){
      console.log(error)
  }
}

onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser) navigate('/')
 });



  return (
    <Wrapper>
      <BackgroundImage />
      <Content>
        <Header />
        <LoginForm>
          <Title>Login</Title>
          <FormFields>
            <InputField 
            type='text' 
            placeholder='Email' 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            />
            <InputField 
            type='password' 
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
            <LoginButton onClick={handleLogin}>Login</LoginButton>
            <HelpText>Need help?</HelpText>
          </FormFields>
        </LoginForm>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: rgba(0,0,0,0.3);
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  & > ${Header} {
    align-self: flex-start;
  }
`;

const LoginForm = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3rem; /* Increased padding */
  border-radius: 0.4rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem; /* Increased font size */
  margin-bottom: 2rem;
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Increased gap between form fields */
`;

const InputField = styled.input`
  padding: 1rem;
  font-size: 1.2rem; /* Increased font size */
  border: none;
  border-radius: 0.3rem;
`;

const LoginButton = styled.button`
  background-color: red;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 1.2rem; /* Increased font size */
`;

const HelpText = styled.p`
  font-size: 1rem; /* Increased font size */
  color: #ccc;
  margin-top: 1.5rem; /* Increased margin top */
  cursor: pointer;
`;

export default LoginPage;
