import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config"; // Assuming you have initialized your Firebase app and exported firebaseAuth from firebase-config

import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import {useNavigate} from "react-router-dom";



export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null); // Store the user object from Firebase authentication
 const navigate = useNavigate();
  // Firebase Authentication State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user); // Set the user state based on authentication state changes
    });
    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
 onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser) navigate('/')
 })


  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Header login={user !== null} /> {/* Pass the user authentication state to the Header component */}
        <Body>
          <div className='TextTopp'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Watch anywhere, Cancel Anytime</h3>
            <h5>Ready to watch? Enter your email to create or restart membership</h5>
          </div>
          <Form>
            {showPassword ? (
              <input
                type='password'
                placeholder='Password'
                name='password'
                className="input"
                value={formValues.password}
                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
              />
            ) : (
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                className="input"
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
              />
            )}
            {!showPassword ? (
              <Button onClick={() => setShowPassword(true)}>Get Started</Button>
            ) : (
              <Button onClick={handleSignIn}>Sign Up</Button> 
            )}
          </Form>
        </Body>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.79);
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

  .TextTopp {
    /* Add your specific styles for the TextTopp class here */
  }
`;

const Body = styled.div`
  text-align: center;
  color: white;
`;

const Form = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: red;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
`;

// Add styles for your input field and other components as needed
