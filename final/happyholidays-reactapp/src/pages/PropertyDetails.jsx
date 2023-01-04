import React, { useEffect, useState } from "react";
import Link from "../components/Link";
import { NoData } from "../components/NoData";
import useProperties from "../hooks/useProperties";
import "./PropertyDetails.css";
import "../icons.css";

export const PropertyDetails = () => {
  const properties = useProperties();
  const [propertyDetails, setPropertyDetails] = useState(null);

  const [reservationParams, setReservationParams] = useState({
    adults: 1,
    nights: 1,
  });

  const handleAdultsChanged = (adults) => {
    setReservationParams({ ...reservationParams, adults });
  };

  const handleNightsChanged = (nights) => {
    setReservationParams({ ...reservationParams, nights });
  };

  const handleReserveClicked = () => {
    alert("Hurray! Your vacation has been booked.");
  }

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const propertyId = params.get("id");
    if (propertyId) {
      setPropertyDetails(properties.findById(propertyId));
    }
  }, []);
  return (
    <main>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">
            PropertyDetails
            {propertyDetails && " - " + propertyDetails?.propertyName}
          </h1>
          <div className="hotelAddress">
            <i className="gg-airplane"></i>
            <h2>{propertyDetails?.stateName}</h2>
            <i className="gg-boy"></i>
            <h2>{propertyDetails?.maxCapacity}</h2>
            <i className="gg-trophy"></i>
            <h2>
              {" "}
              {Math.round((propertyDetails?.rating + Number.EPSILON) * 100) /
                100}
            </h2>
          </div>
          <div className="gallery-container">
            <div className="main-img">
              <img
                src={`/images/${propertyDetails?.imgFileName}`}
                alt={propertyDetails?.propertyName}
              />
            </div>
            <div className="more-images">
              <img src="/imagespropertydetails/image1.jpg" alt="" />
              <img src="/imagespropertydetails/image2.jpg" alt="" />
              <img src="/imagespropertydetails/image3.jpg" alt="" />
              <img src="/imagespropertydetails/image4.jpg" alt="" />
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="reservation-card">
              <span>
                <strong>${propertyDetails?.tarriff} </strong>
                (per person per night)
              </span>
              <div className="select count-select">
                <select
                  className="select-text"
                  value={reservationParams.adults}
                  onChange={(e) => handleAdultsChanged(e.target.value)}
                >
                  <option value="" disabled>
                    No. of Adults
                  </option>
                  {new Array(propertyDetails?.maxCapacity)
                    .fill(1)
                    .map((_, $index) => (
                      <option value={$index + 1} key={$index}>
                        {$index + 1}
                      </option>
                    ))}
                </select>
                <span className="select-bar"></span>
                <label className="select-label">No. of Adults</label>
              </div>
              <div className="select count-select">
                <select
                  className="select-text"
                  value={reservationParams.nights}
                  onChange={(e) => handleNightsChanged(e.target.value)}
                >
                  <option value="" disabled>
                    No. of Nights
                  </option>
                  {new Array(10).fill(1).map((_, $index) => (
                    <option value={$index + 1} key={$index}>
                      {$index + 1}
                    </option>
                  ))}
                </select>
                <span className="select-bar"></span>
                <label className="select-label">No. of Nights</label>
              </div>
              <div className="pricing">
                <span>
                  ${propertyDetails?.tarriff} x {reservationParams.adults}{" "}
                  {reservationParams.adults === 1 ? "guest" : "guests"}
                </span>
                <span>
                  ${propertyDetails?.tarriff * reservationParams.adults}
                </span>
              </div>
              <div className="pricing">
                <span>
                  ${propertyDetails?.tarriff * reservationParams.adults} x{" "}
                  {reservationParams.nights}{" "}
                  {reservationParams.nights === 1 ? "night" : "nights"}
                </span>
                <span>
                  $
                  {propertyDetails?.tarriff *
                    reservationParams.adults *
                    reservationParams.nights}
                </span>
              </div>
              <div className="pricing">
                <span>Service Fee</span>
                <span>$ 50</span>
              </div>
              <hr className="solid" />
              <div className="total-pricing">
                <h3>Total</h3>
                <h3>
                  $
                  {50 +
                    propertyDetails?.tarriff *
                      reservationParams.adults *
                      reservationParams.nights}
                </h3>
              </div>
              <button className="reserve-btn" onClick={handleReserveClicked}>Reserve</button>
            </div>
          </div>
          {!propertyDetails && (
            <div className="no-data-container">
              <NoData
                helperText={"We couldn't find the property you're looking for"}
              />
              <Link href={`/`}>
                <button>Show All Properties</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
