import React from 'react';
import {Pizza} from './Components/pizza.js';
import Navigation from "./Components/Navigation";
const KenticoCloud = require('kentico-cloud-delivery');

function App() {
  const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '459262d7-8f9a-00cd-3f92-f228aa805613',
});

deliveryClient.items()
    .type('pizza')
    .getObservable()
    .subscribe(response => console.log(response.items));
  return (
    <div>
      <Navigation />
    <div className="container">
         <h1>Lets go!!</h1>
    </div>
    </div>
  );
}

export default App;
