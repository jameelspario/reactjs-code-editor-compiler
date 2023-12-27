import React, { useState } from 'react'
import CodeEditor from './editor/CodeEditor'
import classNames from 'classnames'
import OutputWindow from './editor/OutputWindow'
import CustomInput from './editor/CustomInput'
import OutputDetails from './editor/OutputDetails'
import { javaMain } from '../constants/navigation'


const Dashboard = () => {
  const [outputDetails, setOutputDetails] = useState(null);
  const [customInput, setCustomInput] = useState("");
  const [code, setCode] = useState(javaMain);
  const [processing, setProcessing] = useState(null);
  const [language, setLanguage] = useState('java');


  const handleCompile = () => {

  };

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  return (
    <div className='flex flex-row space-x-4 items-start px-4 py-4'>
      <div className='flex flex-col w-full h-full justify-start items-end'>
        <CodeEditor
          code={code}
          onChange={onChange}
          language={language}
        />
      </div>

      <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
        <OutputWindow outputDetails={outputDetails} />
        <div className="flex flex-col items-end">
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
          <button
            onClick={handleCompile}
            disabled={!code}
            className={classNames(
              "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
              !code ? "opacity-50" : ""
            )}
          >
            {processing ? "Processing..." : "Compile and Execute"}
          </button>
        </div>
        {outputDetails && <OutputDetails outputDetails={outputDetails} />}
      </div>

    </div>
  )
}

export default Dashboard