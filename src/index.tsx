import { StrictMode } from "react"
import App from "./App";
import { hydrateRoot } from "react-dom/client";
import { fetchTodo } from "./fetch";
import React from "react";

async function main() {
  const result = await fetchTodo()
  const app = (
    <StrictMode>
      <App todos={result} />
    </StrictMode>
  )
  const element = document.getElementById('root')!

  hydrateRoot(element, app)
}

main()