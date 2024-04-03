import Cookies from 'js-cookie';

const SESSION_DURATION = 60 * 60 * 1000;

export const createSession = () => {
  const timestamp = Date.now().toString();
  const token = generateToken();
  Cookies.set('sessionTimestamp', timestamp);
  Cookies.set('sessionToken', token);
  console.log('Token:', token);
};

const generateToken = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let token = '';
  const tokenLength = 20;

  for (let i = 0; i < tokenLength; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
};
