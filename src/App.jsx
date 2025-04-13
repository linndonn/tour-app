import React, {useState} from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';
// Root component of the application
function App() {
    const [tours, setTours] = useState([]);
  
  // Function to remove a tour or all if ID is null
  const removeTour = (id) => {
    
    if (id === null) {
      setTours([]); 
    } else {
      // Remove the tour that matches the given ID
      setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    }
  };

  return (
    <main>
      <h1>An Antiguan Tour of Europe (Tour App Project) </h1>
      <h2>Tour with us! Options listed below.</h2>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
      <button onClick={() => setTours([])}>Fetch Tours</button>

    </main>
)
}

export default App;