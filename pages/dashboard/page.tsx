import { useState } from 'react';

const Dashboard = () => {

  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const stuff = await response.json();
    setData(stuff.name);
  }

  return ( 
    <div>
      <h1> Dashboard </h1>
      <button onClick={fetchData}>Fetch</button>
      {data && <h3>{data}</h3>}
    </div> 
  );
}

export default Dashboard;
