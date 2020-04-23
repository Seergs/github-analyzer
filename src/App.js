import React, { useState, useEffect } from "react";
import UsernameForm from "./components/UsernameForm/UsernameForm";
import Result from "./components/Result/Result";

import { AppWrapper, Title, Wrapper } from "./styles";

import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e, username) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <AppWrapper>
      <Title>Github User Analyzer</Title>
      <Wrapper>
        <UsernameForm onSubmit={handleFormSubmit} loading={loading} />
        <Result data={user} />
      </Wrapper>
    </AppWrapper>
  );
}

export default App;
