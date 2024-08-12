// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css'; // Importă fișierul CSS

function Home() {
  const artists = [
    {
      id: 1,
      name: 'Yukai Du',
      description:
        'Yukai Du is a Chinese-born, London-based illustrator and animator known for her vibrant and textured style. She has collaborated with major brands like Adobe, Apple, and TED-Ed.',
      imageUrl:
        'https://static.wixstatic.com/media/9d456d_b0fbda0a160748d68c292cbd3bee2a26~mv2.jpg/v1/fill/w_888,h_1034,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d456d_b0fbda0a160748d68c292cbd3bee2a26~mv2.jpg', // Înlocuiește cu un URL real
      link: 'https://www.yukaidu.com/',
    },
    {
      id: 2,
      name: 'Erica Gorochow',
      description:
        'Erica Gorochow is an animator and director involved in innovative digital animation projects, recognized for her modern narrative approach.',
      imageUrl:
        'https://d24sh1k4ksom3h.cloudfront.net/9fb3aa93ab9d4d359c02331476d2c3a9.png', // Înlocuiește cu un URL real
      link: 'https://peprally.co/',
    },
    {
      id: 3,
      name: 'Sean Charmatz',
      description:
        'Sean Charmatz is an animator and storyboard artist famous for his playful and creative style, particularly his "The Secret World of Stuff" series.',
      imageUrl:
        'data:image/webp;base64,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', // Înlocuiește cu un URL real
      link: 'https://www.instagram.com/sean_charmatz/',
    },
    {
      id: 4,
      name: 'Eran Hilleli',
      description:
        'Eran Hilleli is an Israeli director and animator known for his poetic and minimalist style, with work showcased at international film festivals.',
      imageUrl:
        'data:image/jpeg;base64,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', // Înlocuiește cu un URL real
      link: 'http://eranhilleli.com/',
    },
    // {
    //   id: 5,
    //   name: 'Kuvshinov Ilya',
    //   description:
    //     'Kuvshinov Ilya is a Russian artist and animator known for his distinctive illustration and animation style, contributing to popular Japanese anime.',
    //   imageUrl: 'https://example.com/kuvshinov-ilya.jpg', // Înlocuiește cu un URL real
    //   link: 'https://www.instagram.com/kuvshinov_ilya/',
    // },
    {
      id: 6,
      name: 'Anna Mantzaris',
      description:
        'Anna Mantzaris is a Swedish animator and director known for her stop-motion animations that blend humor with melancholy.',
      imageUrl:
        'https://www.anifilm.cz/images/news/442/sm_anna-picture.jpg?v=4', // Înlocuiește cu un URL real
      link: 'https://www.instagram.com/annamantzaris/',
    },
  ];

  return (
    <div>
      <Navbar />
      <h1>Featured 2D Animation Artists of 2024</h1>
      <ul className="artist-list">
        {artists.map((artist) => (
          <li key={artist.id} className="artist-item">
            <h2>{artist.name}</h2>
            <p>{artist.description}</p>
            <img
              src={artist.imageUrl}
              alt={`Artwork by ${artist.name}`}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/250'; // Imagine fallback
              }}
              className="artist-image"
            />
            <a
              href={artist.link}
              target="_blank"
              rel="noopener noreferrer"
              className="artist-link"
            >
              View Portfolio
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
