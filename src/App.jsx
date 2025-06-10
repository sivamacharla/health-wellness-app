// import './App.css';
// import wellnessData from './assets/wellnessData';
// import meditationImg from './assets/meditation.png';

// function App() {
//   return (
//     <div className="app-container">
//       <h1 className="app-title">Wellness Resources</h1>
//       <div className="card-grid">
//         {wellnessData.map((item, index) => (
//           <div className="card" key={index}>
//             <img src={item.image} alt={item.title} className="card-image" />
//             <h3 className="card-title">{item.title}</h3>
//             <p className="card-category">{item.category}</p>
//             <button className="card-button">View Menu</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import './App.css';
import wellnessData from './assets/wellnessData';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Wellness Resources</h1>
      <div className="card-grid">
        {wellnessData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-category">{item.category}</p>
            <button className="card-button">View Menu</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
