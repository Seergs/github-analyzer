import React, { useState } from "react";

import { Form, Button, ChevronRightSvg, Input } from "./usernameFormStyles";

import ClipLoader from "react-spinners/ClipLoader";

export default function UsernameForm({ onSubmit, loading }) {
  const [username, setUsername] = useState("");
  return (
    <Form onSubmit={(e) => onSubmit(e, username)}>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button type="submit">
        {loading ? (
          <ClipLoader color="#2C7A7B" size={14} />
        ) : (
          <>
            <span>Analyze</span>
            <ChevronRightSvg />
          </>
        )}
      </Button>
    </Form>
  );
}
