import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const markDown = `
# Hello World 

## Hello World 

**I am here** 

[title](https://www.https://css-exercise-1.vercel.app/)

\`\`\`
const a = 10
const b = 11
\`\`\`

\`const c = 12 \`

- First item
- Second item
- Third item

> This Is A Block Quote

![alt text](https://pbs.twimg.com/profile_images/1362371062634319873/jjm5Fs4J_400x400.jpg)`;

function App() {
  const [text, setText] = useState(markDown);

  return (
    <div className="App">
      <h2>Editor</h2>
      <textarea
        id="editor"
        rows="12"
        cols="100"
        placeholder="Add text here"
        value={text}
        onChange={(event) => setText(event.target.value)} // setText updater is attached to the onChange event handler, which passes the value of the input via event.target.value to the string defined by the value text //
      ></textarea>
      <h2>Previewer</h2>
      <div id="preview">
        <ReactMarkdown>{text}</ReactMarkdown>
        {/* Converts the string defined by the value text to Markdown using react-markdown package */}
      </div>
    </div>
  );
}

export default App;
