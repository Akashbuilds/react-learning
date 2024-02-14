
//defining the  function customRender and passing my reactelement in that.

function customRender(customReactElement, container) {
  //   const domElement = document.createElement(customReactElement.type);
  //   domElement.innerHTML = customReactElement.children;
  //   domElement.setAttribute("href", customReactElement.features.href);
  //   domElement.setAttribute("target", customReactElement.features.target);

  //   container.appendChild(domElement); this is not a very good approach so let's try something different .
//creating a domelement variable to access type from customreactelement
  const domElement = document.createElement(customReactElement.type);
// to inject the clickable text which acts as my link.
  domElement.innerHTML = customReactElement.children;
  for (const attribute in customReactElement.features) {
    if (attribute === "children") continue;
    domElement.setAttribute(attribute, customReactElement.features[attribute]);
  }
  container.appendChild(domElement);
}

const customReactElement = {
  type: "a",

  features: {
    href: "https://chat.openai.com/",
    target: "_blank",
  },

  children: "Click me to visit openai",
};
//wherer would my container inject the javascript inside the html 
const myContainer = document.querySelector("#root");

customRender(customReactElement, myContainer);
// calling the function customRender and passing what to inject and where to.