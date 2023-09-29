import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginContainer, LoginTitle, LoginWrapper } from './Login.styled';

export default function Login() {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>Login</LoginTitle>
        <LoginForm />
      </LoginWrapper>
    </LoginContainer>
  );
}

// import { LoginForm } from 'components/LoginForm/LoginForm';
// import { LoginTitle, LoginkWrapper } from './Login.styled';

// export default function Login() {
//   return (
//     <LoginkWrapper>
//       <LoginTitle>Login in</LoginTitle>
//       <LoginForm />
//     </LoginkWrapper>
//   );
// }
