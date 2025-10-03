const mainContainer= document.getElementById('root');
const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

customRender(reactElement, mainContainer);

function customRender(reactElement,mainContainer)
{
    const domElement=document.createElement(reactElement.type);
    domElement.innerText=reactElement.children;
   for(let prop in reactElement.props)
   {
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop] )
   }

    mainContainer.appendChild(domElement);
}