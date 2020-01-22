import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, InputOnChangeData, Button } from 'semantic-ui-react';

const AppContainer = styled.div`
`

const App: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (_: any, data: InputOnChangeData) => {
    setUsername(data.value)
  }

  const handlePasswordChange = (_: any, data: InputOnChangeData) => {
    setPassword(data.value)
  }


  const handleLogin = () => {

    fetch('http://localhost:3001/login', { body: JSON.stringify({ username: username, password: password }), method: "POST", headers: { "content-type": "application/json; charset=UTF-8" } })
  }

  return (
    <AppContainer>
      <Input value={username} placeholder="Username" onChange={handleUsernameChange} />
      <Input value={password} placeholder="Password" onChange={handlePasswordChange} />
      <Button onClick={handleLogin}>Login</Button>
    </AppContainer>
  );
}

export default App;
