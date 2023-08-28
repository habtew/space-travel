import Nav from "./nav"
import data from '../data/destinationdata'

export default function Destination(){

    console.log(data.moon)
    return (
        <div className="destination">
            <Nav />
            <div className="destination--main">
                <div className="destination--hero">
                    <p><span>01 </span>Pick your destination</p>
                    <img src="../public/destination/image-moon.webp" alt="moon image" />
                </div>
                <div className="destination--section">
                    <ul className="destination--section--header">
                        <li>MOON</li>
                        <li>Mars</li>
                        <li>EUROPA</li>
                        <li>TITAN</li>
                    </ul>

                    <h1 className="destinatin--section--title">MOON</h1>
                    <p className="destination--section--detail">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <hr className="hr"/>
                    <div className="destination--info">
                        <div>
                            <p className="destination-info--p">AVG. DISTANCE</p>
                            <h1 className="destinationn--info--h1">384, 400 KM</h1>
                        </div>

                        <div>
                            <p>AVG. DISTANCE</p>
                            <h1>384, 400 KM</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}