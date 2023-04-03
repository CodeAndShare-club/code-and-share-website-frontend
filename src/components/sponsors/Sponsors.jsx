import React, { useState, useEffect } from 'react';


function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch('https://codeandshare.pythonanywhere.com/sponsors/')
      .then((response) => response.json())
      .then((data) => setSponsors(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="sponsors">
      <h2>Sponsors</h2>
      <div className="sponsors-list">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor">
            <img src={sponsor.icon} alt={sponsor.name} />
            <p>{sponsor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sponsors;
