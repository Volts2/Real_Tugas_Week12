import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banna", "Coconut"];
console.log(fruits);

const fullName = {
  fName: "John",
  lName: "Thor"
};

const user = {
  ...fullName,
  id: 1,
  username: "johnthor1"
};

console.log(user);
