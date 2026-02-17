import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages SPA redirect (?p=...)
const params = new URLSearchParams(window.location.search);
const p = params.get("p");
const q = params.get("q");

if (p) {
  const decodedPath = decodeURIComponent(p);
  const decodedQuery = q ? `?${decodeURIComponent(q)}` : "";
  window.history.replaceState(null, "", decodedPath + decodedQuery + window.location.hash);
}

createRoot(document.getElementById("root")!).render(<App />);
