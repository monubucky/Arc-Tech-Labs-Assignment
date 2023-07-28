import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  //fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments'); //API call
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };
  return (

    <div >
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table className='responsive-table'>
          <thead  >
            <tr   >
              <th >Id</th>
              <th >Post Id</th>
              <th >Name</th>
              <th >Email</th>
              <th > Body</th>
            </tr>
          </thead>
          <tbody >
            {data.map((item) => (
              <tr key={item.id} >
                <td >{item.id}</td>
                <td >{item.postId}</td>
                <td >{item.name}</td>
                <td >{item.email}</td>
                <td >{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
}

export default App;
