import React, { useState } from 'react'
import Editor from '@monaco-editor/react';


const CodeEditor = ({ onChange, language, code }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">

      <Editor
        height="85vh"
        width={`100%`}
        language={language}
        value={value}
        onChange={handleEditorChange}
      />
    </div>
  )
}

export default CodeEditor