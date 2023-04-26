---
id: 'usereducer-react-hook'
title: 'useReducer React Hook with NHL example'
date: '2023-4-23'
category: "Guidance, Advice, Technical, React, Python, Web Development, React Hooks"
template: "blog-post"
tags: 'React, React Hooks, Javascript, Web Development, useReducer'
---

# useReducer React Hook with NHL example

## The useReducer Hook in React

The useReducer hook is a powerful tool in React that allows you to manage complex state in your application with ease. It works by taking in a reducer function and an initial state, and returns a stateful value and a dispatch function. The dispatch function is used to update the state based on the action passed to it.

The syntax for the useReducer hook is as follows:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- **`state`** is the current state of the application.
- **`dispatch`** is a function that is used to update the state.
- **`reducer`** is a function that takes in the current state and an action, and returns the new state.

### Using the NHL API with useReducer

To demonstrate how to use the useReducer hook, we'll be building a simple application that displays the current standings for the NHL.

First, we'll need to set up our project and install the necessary dependencies:

```bash
  npx create-react-app nhl-standings
  cd nhl-standings
  npm install axios react-bootstrap
```

Next, we'll create a file called **`api.js`** in our **`src`** directory. This file will be used to make API calls to the NHL API.

```jsx
import axios from "axios";

const API_BASE_URL = "https://statsapi.web.nhl.com/api/v1";

export const fetchStandings = async () => {
  const response = await axios.get(`${API_BASE_URL}/standings`);
  return response.data;
};
```

This code defines a function called **`fetchStandings`** that makes a GET request to the NHL API and returns the data.

Next, we'll create a new file called **`Standings.js`** in our **`src`** directory. This file will contain our component that will display the NHL standings.

```jsx
import React, { useReducer, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchStandings } from "./api";

const initialState = {
  loading: true,
  standings: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_STANDINGS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_STANDINGS_SUCCESS":
      return { ...state, loading: false, standings: action.payload };
    case "FETCH_STANDINGS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Standings = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_STANDINGS_REQUEST" });
    fetchStandings()
      .then((data) => {
        dispatch({ type: "FETCH_STANDINGS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_STANDINGS_FAILURE", payload: error.message });
      });
  }, []);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <Container>
      <h1>NHL Standings</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Team</th>
            <th>Games Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>OTL</th>
            <th>Points</th>
            <th>ROW</th>
          </tr>
        </thead>
        <tbody>
          {state.standings.records.map((record) =>
            record.teamRecords.map((teamRecord) => (
              <tr key={teamRecord.team.id}>
                <td>{teamRecord.team.name}</td>
                <td>{teamRecord.gamesPlayed}</td>
                <td>{teamRecord.leagueRecord.wins}</td>
                <td>{teamRecord.leagueRecord.losses}</td>
                <td>{teamRecord.leagueRecord.ot}</td>
                <td>{teamRecord.points}</td>
                <td>{teamRecord.row}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Standings;
```

This code defines the **`Standings`** component that uses the **`useReducer`** hook to manage the state of the application. The **`reducer`** function is used to update the state based on the action passed to it, and the **`initialState`** defines the initial state of the application.

In the **`useEffect`** hook, we call the **`fetchStandings`** function to make a GET request to the NHL API and update the state based on the response. If there is an error, we update the state with the error message.

Finally, we render the standings table using the state data. If the data is still loading, we display a loading message. If there is an error, we display the error message.

## Conclusion

The useReducer hook in React is a powerful tool that allows you to manage complex state in your application with ease. It works by taking in a reducer function and an initial state, and returns a stateful value and a dispatch function. The dispatch function is used to update the state based on the action passed to it.
