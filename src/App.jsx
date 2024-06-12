import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Box from './Box/Box';
import './App.css';
import Spinner from './Spinner/Spinner';

function App() {
  const [load, setLoad] = useState(false);
  const [town, setTown] = useState("japan");

  const handleCityFromBox = (data) => {
    setTown(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const response = await fetch(`https://api.unsplash.com/search/collections?page=1&query=${town}&client_id=yQkGIg_TxEqLE2wgfHnQqldQ9kKoyACZoJ62wlRbjb8`);
        const data = await response.json();
        console.log(data.results[0].cover_photo.urls.full);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, [town]);

  return (
    <div className='flex flex-col justify-center items-center my-40 text-white'>
      <Navbar />
      {load ? <Spinner /> : <Box onCityChange={handleCityFromBox} />}
    </div>
  );
}

export default App;
