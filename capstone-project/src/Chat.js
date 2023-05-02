import { useState, useEffect, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./chat.css"
// const { Configuration, OpenAIApi } = require("openai");

function Chat() {
  const [input, setInput] = useState("");
  const [reRender, setReRender] = useState("");
  const [chat, setChat] = useState(["무엇을 도와드릴까요?"]);
  const [output, setOutput] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  
  const handleSendClick = () => {
    
    let copy = [...chat];
    copy.push(input);
    setChat(copy);
    setInput("");
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: input,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((result) => {
        copy=[...copy];
        copy.push(result.data.choices[0].text);
        setChat(copy);
        // let copyreRender = [...reRender];
        // copyreRender = [''];
        // setReRender(copyreRender);
        // copyreRender.pop();
      });
      
  };

  // useEffect(() => { // chat의 내용을 재랜더링을 하기위해 만든 useEffect()
  //   let copy = [...chat]
  //   setChat(copy);
  // }, [reRender]); 

  return (
    <div className="App">
      <div className="chatContainer">
        {chat.map((item, index) => {
          return (
            <div className="chatBox" key={index}>
              <span className={`chatMsg ${index % 2 === 1 ? "user" : ""}`}>
                {item}
              </span>
            </div>
          );
        })}
      </div>
      <div className="center">
      <input className="chatInput"
       value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
            if (e.key === "Enter") { 
              handleSendClick(); 
            }
          }}
      />

      <button onClick={handleSendClick}>보내기</button>
      </div>

    </div>
  );
}

export default Chat;
