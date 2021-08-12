// import React, { useState } from 'react';
// import { BrowserRouter, Route, /*Link*/ } from 'react-router-dom';
// import './App.css';
// import Search from './search';
// import MakeNW from "./makeNW";

// // const data =[
// //   [{x: 0, y: 6},{x: 1, y: 9},{x: 2, y: 6},
// //   {x: 3, y: 5},{x: 4, y: 2},{x: 6, y: 4},
// //   {x: 7, y: 2},{x: 8, y: 5},{x: 9, y: 2}]
// // ];

// const useRoot = () => {

//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [item, setItem] = useState("") 
  
//   const search = searchValue => { 

//     const pass = {
//       text: searchValue
//     }

//     console.log(pass)
//     const param = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8"
//       },
//       body: JSON.stringify(pass)
//     };

//     setLoading(true);
//     setErrorMessage(null);

//     fetch('http://localhost:8000', param)
//     .then(response => response.json())
//     .then(jsonResponse => {
//       if (jsonResponse.Response === "True") {
//         setLoading(false);
//       } else {
//         setErrorMessage(jsonResponse.Error);
//         setLoading(false);
//         // setItem(jsonResponse);
//         console.log("結果")
//         console.log(jsonResponse)
//         setItem(jsonResponse.text)
//       }
//     });
    
//   }
//   return (
//     <div>
//       <Search search={search}/>
//       <MakeNW/>
//       <div className="movies">
//         {loading && !errorMessage ? (
//          <span> </span>
//          ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//           <div>
//             {item}
            
//           </ div>
//         )}
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <div>
//           <Route path="/" exact component={useRoot} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
