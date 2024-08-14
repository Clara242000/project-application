import React from 'react';
import '../styles/Home.css'; 

const artist = {
  name: 'Lois van Baarle',
  website: 'https://loish.net/',
  image: 'https://www.clipstudio.net/wp-content/uploads/2019/08/0037_001.png',
  work: [
    'https://loish.net/wp-content/uploads/2022/11/ice_final.png',
    'https://loish.net/wp-content/uploads/2022/11/swim_update.png',
    'https://loish.net/wp-content/uploads/2022/04/smoke_final.png',
    'https://loish.net/wp-content/uploads/2021/04/fleurs_final2.png',
    'https://loish.net/wp-content/uploads/2018/08/butterfly.jpg'
  ],
  description: `Lois van Baarle, known as Loish, is a digital artist from the Netherlands renowned for her vibrant and colorful work. With over a decade in the industry, she’s collaborated with clients like LEGO and Coca-Cola. Loish discovered digital art as a teenager and earned a master’s in animation in 2009. She is featured in art books like "The Art of Loish" and now shares her expertise through workshops and Patreon. Based in Utrecht, she continues to inspire and educate fellow artists.`,
};

const Home = () => {
  return (
    <div className="home">
      <div className="artist-card">
        <img src={artist.image} alt={artist.name} className="artist-image" />
        <div className="artist-info">
          <h1 className="artist-name">{artist.name}</h1>
          <a
            href={artist.website}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-link"
          >
            Visit Website
          </a>
          <p className="artist-description">{artist.description}</p>
          {/* <h2 className="gallery-title">Some of her beautiful works</h2> */}
        </div>
        
        <div className="artist-work-gallery">
          {artist.work.map((work, index) => (
            <img
              key={index}
              src={work}
              alt={`Work ${index + 1}`}
              className="artist-work-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
