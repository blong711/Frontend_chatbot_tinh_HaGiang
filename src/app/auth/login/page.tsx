"use client";
import { EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { Mail, Lock } from "react-feather";
import {  ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios'; 
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { API_URL } from "@/Components/apiConfig";


const UserLogin = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [showPassWord, setShowPassWord] = useState(false);
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
      console.log('Email: '+email);
      console.log('Password: '+password);
      let dataPost: { [key: string]: any } = {};
      dataPost['email'] = email;
      dataPost['password'] = password;
      
      try {
        let signLogin = await axios.post(`${API_URL}/login`, dataPost);
        let dataResponse = await signLogin.data;
        const token = dataResponse.token;
        localStorage.setItem('token', token);
        window.location.href = `/${i18LangStatus}/dashboard`;
    } catch (error) {
        alert("Please Enter Valid Email Or Password");
    }
  }


  return (
    <Container fluid>
      <Row>
        <Col xl="12 p-0">
          <div className="login-card1">
            <Form className="theme-form login-form">
              <div className="login-header ">
                <h4>Sign In</h4>
                <h6>Welcome back! Log in to your account.</h6>
              </div>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <InputGroup>
                  <InputGroupText><Mail /></InputGroupText>
                  <input type="email" name="email" placeholder="Typing Email ..." className="block px-3 py-2 rounded-lg border border-gray-300" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>{Password}</Label>
                <InputGroup>
                  <InputGroupText><Lock /></InputGroupText>
                  <input type={showPassWord ? "text" : "password"} name="password" placeholder="Typing Password ..." className="block px-3 py-2 rounded-lg border border-gray-300" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <div className="show-hide"><span className={showPassWord ? "hide" : "show"} onClick={() => setShowPassWord(!showPassWord)}></span></div>
                </InputGroup>
              </FormGroup>
              <FormGroup className="login-btn">
                <div className="checkbox">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                </div>
                <a href={Href} className="link">{ForgotPassword}?</a>
              </FormGroup>
              <FormGroup>
              <Button type="button" className="mt-3 px-3 py-2 rounded-lg bg-blue-700 border text-white" onClick={handleLogin}>Login</Button>
              </FormGroup>
              <p>Don't have account ?<a className="ms-2" href="/auth/register">Create Account</a></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
