import logo from './logo.svg';
import './assets/css/style.css';
import './App.css';


import Header from './components/header/header.js';
import Hero from './components/hero/hero.js';

//components
import Col from './components/bootstrap/col.js';

//cards
import Cards from './components/cards/cards.js'; 
import Card from './components/cards/card.js';
import CardProduct from './components/cards/cardProduct.js';

function App() {
  return (
  <div className="App">

    <Header />

    <Hero imgURL="https://picsum.photos/1400/500?random=200" title="Welcome Section" />

    <h1 className="mt-4">Hi, welcome</h1>

    <Cards class="py-5">
      <Col class="col-md-4">
        <Card title="Card 1" imgURL="https://picsum.photos/200/300?random=1" />
      </Col>
      <Col>
        <Card title="Card 2" imgURL="https://picsum.photos/200/300?random=2" />
      </Col>
      <Col>
        <Card title="Card 3" imgURL="https://picsum.photos/200/300?random=3" />
      </Col>
    </Cards>

    <Cards class="py-5">
      <Col class="col-md-4">
        <Card title="Card 4" imgURL="https://picsum.photos/200/300?random=4" />
      </Col>
      <Col>
        <Card title="Card 3" imgURL="https://picsum.photos/200/300?random=3" />
      </Col>
      <Col>
        <Card title="Card 6" imgURL="https://picsum.photos/200/300?random=6" />
      </Col>
     
    </Cards>

    <Hero imgURL="https://picsum.photos/1400/500?random=7" title="My hero section" />

    <Cards title="Supershop" class="py-5">
      <Col class="col-md-4">
       <CardProduct title="cocooil" imgURL="https://picsum.photos/200/300?random=3" price="30" description="Lorem ipsum text 1" button={true} />
       </Col>
       <Col class="col-md-4">
        <CardProduct title="Polaroid" imgURL="https://picsum.photos/200/300?random=4" price="60" description="Lorem ipsum text 2" button={true} />
      </Col>
      <Col>
        <CardProduct title="Maui Moisture" imgURL="https://picsum.photos/200/300?random=5" price="20" description="Lorem ipsum text 3" button={true} />
      </Col>
    </Cards>
    
  </div>
  );
}

export default App;
