import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';
import data from "./data"


export default function App() {

  const cardData = data.map(item => {
    return (<Card
      key={item.id}
      {...item}
      // img={`images/${item.coverImg}`}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
    />)
  })

  return (
    <div className="wrap">
      <Navbar />
      <div className="container">
        <Hero />
        <section className="cards-list">
          {cardData}
        </section>
      </div>
      <Footer />
    </div>

  )
}

