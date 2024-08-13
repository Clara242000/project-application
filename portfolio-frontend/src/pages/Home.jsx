import React from 'react';
import '../styles/Home.css'; // Importă stilurile specifice pentru Home

const artist = {
  name: 'Lois van Baarle',
  website: 'https://loish.net/',
  image: 'https://www.clipstudio.net/wp-content/uploads/2019/08/0037_001.png',
  work: [
    'https://loish.net/wp-content/uploads/2022/11/ice_final.png',
    'https://loish.net/wp-content/uploads/2019/03/loish_wild_fairy.png',
    'https://loish.net/wp-content/uploads/2022/01/loish_smile.png'
  ],
  description: `Lois van Baarle, cunoscută și sub numele de Loish, este o artistă digitală talentată originară din Olanda, care a devenit cunoscută pentru lucrările sale expresive și pline de culoare. Cu o carieră de peste un deceniu în industria artei digitale, Lois a colaborat cu clienți renumiți precum LEGO, Guerrilla Games, și Coca-Cola.

De la o vârstă fragedă, Lois a fost pasionată de desen, iar această pasiune a evoluat în timpul anilor petrecuți în diferite țări, inclusiv în Statele Unite, Indonezia, Franța și Belgia. După descoperirea artei digitale în adolescență, ea a decis să își urmeze visul și a studiat animația, obținând diploma de master în 2009.

Cariera sa a început ca freelancer, lucrând în animație, artă pentru jocuri și ilustrații promoționale, dar s-a concentrat rapid pe designul de personaje. Lucrările sale au fost apreciate la nivel mondial și au fost prezentate în două cărți de artă, "The Art of Loish" și "The Sketchbook of Loish", care au fost bine primite de comunitatea de artă.

Lois nu se limitează doar la lucrările sale de artă. Ea este, de asemenea, o educatoare dedicată, care oferă ateliere și cursuri de formare pentru alți artiști digitali, împărtășind cunoștințele și experiența sa prin intermediul workshop-urilor și al platformei Patreon, unde oferă sfaturi, tutoriale și materiale din culise.

În prezent, Lois locuiește în Utrecht, Olanda, și continuă să inspire și să învețe alți artiști prin creațiile sale și prin activitățile sale educaționale.`
};

const Home = () => {
  return (
    <div className="home">
      <h1>Meet the Artist</h1>
      <div className="artist-card">
        <img src={artist.image} alt={artist.name} className="artist-image" />
        <h2 className="artist-name">{artist.name}</h2>
        <a href={artist.website} target="_blank" rel="noopener noreferrer" className="artist-link">
          Visit Website
        </a>
        <div className="artist-work-gallery">
          {artist.work.map((work, index) => (
            <img key={index} src={work} alt={`Work ${index + 1}`} className="artist-work-image" />
          ))}
        </div>
        <p className="artist-description">{artist.description}</p>
      </div>
    </div>
  );
};

export default Home;
