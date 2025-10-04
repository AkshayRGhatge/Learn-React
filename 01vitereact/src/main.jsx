import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

// const anotherElement=(
//   <a href='https://google.com' target="_blank"> Visit Google Link</a>
// )

const username="AKshay";
const reactElement=React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'Test',
    username
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
)
