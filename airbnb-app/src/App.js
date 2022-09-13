
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Tour from './components/Tour';
import './index.css';
import myData from './components/data';
import myTravels from './components/travelData';

function App() {
  const cards = myData.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      //You also use {...item} and delete 'item' form the card//
      />
    )
  })     
  const travel = myTravels.map(trip => {
    return (
      <Tour
        key={trip.id}
          trip={trip}
      />
     )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero/>
    <section className="cards-list">
                {cards}
      </section>
      <section>
        {travel}
      </section>
      </div>
  );
}

export default App;
