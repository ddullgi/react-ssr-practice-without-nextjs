import { StrictMode } from "react"
import "./index.css"
import App from "./App";
import { hydrateRoot } from "react-dom/client";
import { fetchTodo } from "./fetch";

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