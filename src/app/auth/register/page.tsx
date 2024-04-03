"use client";
import { EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { Mail, Lock, Phone } from "react-feather";
import {  ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios'; 
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { API_URL } from "@/Components/apiConfig";


const UserRegister = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [showPassWord, setShowPassWord] = useState(false);
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [numberPhone, setNumberPhone] = useState('');

  const handleRegister = async () => {
      console.log('Email: '+email);
      console.log('Password: '+password);
      let dataPost: { [key: string]: any } = {};
      dataPost['email'] = email;
      dataPost['password'] = password;
      dataPost['confirmPassword'] = confirmPassword;
      dataPost['numberPhone'] = numberPhone;

      
      try {
        let signLogin = await axios.post(`${API_URL}/register`, dataPost);
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
                <h4>Register</h4>             
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
              <FormGroup>
                <Label>Confirm Password</Label>
                <InputGroup>
                  <InputGroupText><Lock /></InputGroupText>
                  <input type={showPassWord ? "text" : "password"} name="confirmPassword" placeholder="Typing Confirm Password ..." className="block px-3 py-2 rounded-lg border border-gray-300" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                  <div className="show-hide"><span className={showPassWord ? "hide" : "show"} onClick={() => setShowPassWord(!showPassWord)}></span></div>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>Phone Number</Label>
                <InputGroup>
                  <InputGroupText><Phone /></InputGroupText>
                  <input type="numberPhone" name="numberPhone" placeholder="Typing Phone Number ..." className="block px-3 py-2 rounded-lg border border-gray-300" value={numberPhone} onChange={(e) => setNumberPhone(e.target.value)}/>
                </InputGroup>
              </FormGroup>
              <FormGroup className="login-btn">
                <div className="checkbox">
                  <Input id="checkbox1" type="checkbox" />
                </div>
              </FormGroup>
              <FormGroup>
              <Button type="button" className="mt-3 px-3 py-2 rounded-lg bg-blue-700 border text-white" onClick={handleRegister}>Register</Button>
              </FormGroup>
              <p>Already have account ?<a className="ms-2" href="/auth/login">Sign in</a></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegister;
