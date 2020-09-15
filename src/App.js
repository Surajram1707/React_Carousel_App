import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };

function App() {
  return (
	<div style={styles}>
		<Carousel>
			<div>
				<img src="https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg" alt="The Taj Mahal" />
				<p className="legend">The Taj Mahal</p>
			</div>
			<div>
				<img src="https://www.transindiatravels.com/wp-content/uploads/the-red-fort-delhi.jpg" alt="The Red Fort"/>
				<p className="legend">The Red Fort</p>
			</div>
			<div>
				<img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/07/18.jpg" alt="The Mysore Palace"/>
				<p className="legend">The Mysore Palace</p>
			</div>
			<div>
				<img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Kanyakumari-1.jpg" alt="Kanyakumari"/>
				<p className="legend">Kanyakumari</p>
			</div>
		</Carousel>
	</div>
  );
}

export default App;
