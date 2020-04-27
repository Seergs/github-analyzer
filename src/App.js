import React, { useState } from "react";
import UsernameForm from "./components/UsernameForm/UsernameForm";
import Result from "./components/Result/Result";
import cogoToast from "cogo-toast";

import { AppWrapper, Title, Wrapper } from "./styles";
import GlobalStyles from "./globalStyles";

import axios from "axios";
import Footer from "./components/Footer/Footer";

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
        cogoToast.error("Oops, something went wrong, try again later", {
          position: "top-right",
          hideAfter: 3,
        });
        setLoading(false);
      });
  };

  return (
    <AppWrapper>
      <GlobalStyles />
      <Title>Github User Analyzer</Title>
      <Wrapper>
        <UsernameForm onSubmit={handleFormSubmit} loading={loading} />
        <Result data={user} />
      </Wrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
