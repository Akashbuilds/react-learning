import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: "a",
  
    features: {
      href: "https://chat.openai.com/",
      target: "_blank",
    },
  
    children: "Click me to visit openai",
  };

  function MyApp(){
    return (
        <div>
            custom react app
        </div>
    )
  }

  const anotherElement = (
    <a href = "https://chat.openai.com/" target = "_blank">Visit OpenAi</a>
  )

  const aReactElelement = React.createElement(
    'a',
    {href: "https://chat.openai.com/", target: "_blank"},
    'Visit OpenAi',
  )

  
ReactDOM.createRoot(document.getElementById('root')).render(
  
  aReactElelement

)
