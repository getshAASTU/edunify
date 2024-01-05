import { useState, useEffect } from "react";
import Image from "next/image";
import style from "./Shools.module.css";
const Schools = () => {
  const [database, setDatabase] = useState([]);
  async function getData() {
    const url = "http://localhost:3000/api/school";
    const postData={
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    }
    const res = await fetch(url,postData);
    const response = await res.json();
    setDatabase(response.schools);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className={style.cardContainer}>
        {database.map((item) => (
          <div className={style.card}>
            <Image
              className={style.cardImg}
              src={item.img}
              alt="car"
              width={400}
              height={315}
            />

            <div className={style.ratingContainer}>
              <div className={style.rating}>
                <div>
                  <svg
                    className="star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.81121 2.24644C10.1972 1.46856 11.3061 1.47832 11.6888 2.24644L13.8248 6.55582L18.6037 7.24909C19.4607 7.37277 19.8042 8.42406 19.1827 9.0262L15.7252 12.3787L16.543 17.1144C16.6902 17.9704 15.7841 18.6084 15.0252 18.2113L10.75 15.9752L6.47476 18.2113C5.71588 18.6116 4.80983 17.9704 4.95703 17.1144L5.77478 12.3787L2.3173 9.0262C1.69581 8.42406 2.03927 7.37277 2.89628 7.24909L7.67524 6.55582L9.81121 2.24644Z"
                      fill="#FDBC7D"
                    />
                  </svg>
                  <svg
                    className="star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.81121 2.24644C10.1972 1.46856 11.3061 1.47832 11.6888 2.24644L13.8248 6.55582L18.6037 7.24909C19.4607 7.37277 19.8042 8.42406 19.1827 9.0262L15.7252 12.3787L16.543 17.1144C16.6902 17.9704 15.7841 18.6084 15.0252 18.2113L10.75 15.9752L6.47476 18.2113C5.71588 18.6116 4.80983 17.9704 4.95703 17.1144L5.77478 12.3787L2.3173 9.0262C1.69581 8.42406 2.03927 7.37277 2.89628 7.24909L7.67524 6.55582L9.81121 2.24644Z"
                      fill="#FDBC7D"
                    />
                  </svg>
                  <svg
                    className="star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.81121 2.24644C10.1972 1.46856 11.3061 1.47832 11.6888 2.24644L13.8248 6.55582L18.6037 7.24909C19.4607 7.37277 19.8042 8.42406 19.1827 9.0262L15.7252 12.3787L16.543 17.1144C16.6902 17.9704 15.7841 18.6084 15.0252 18.2113L10.75 15.9752L6.47476 18.2113C5.71588 18.6116 4.80983 17.9704 4.95703 17.1144L5.77478 12.3787L2.3173 9.0262C1.69581 8.42406 2.03927 7.37277 2.89628 7.24909L7.67524 6.55582L9.81121 2.24644Z"
                      fill="#FDBC7D"
                    />
                  </svg>
                  <svg
                    className="star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.81121 2.24644C10.1972 1.46856 11.3061 1.47832 11.6888 2.24644L13.8248 6.55582L18.6037 7.24909C19.4607 7.37277 19.8042 8.42406 19.1827 9.0262L15.7252 12.3787L16.543 17.1144C16.6902 17.9704 15.7841 18.6084 15.0252 18.2113L10.75 15.9752L6.47476 18.2113C5.71588 18.6116 4.80983 17.9704 4.95703 17.1144L5.77478 12.3787L2.3173 9.0262C1.69581 8.42406 2.03927 7.37277 2.89628 7.24909L7.67524 6.55582L9.81121 2.24644Z"
                      fill="#FDBC7D"
                    />
                  </svg>
                  <svg
                    className="star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.81121 2.24644C10.1972 1.46856 11.3061 1.47832 11.6888 2.24644L13.8248 6.55582L18.6037 7.24909C19.4607 7.37277 19.8042 8.42406 19.1827 9.0262L15.7252 12.3787L16.543 17.1144C16.6902 17.9704 15.7841 18.6084 15.0252 18.2113L10.75 15.9752L6.47476 18.2113C5.71588 18.6116 4.80983 17.9704 4.95703 17.1144L5.77478 12.3787L2.3173 9.0262C1.69581 8.42406 2.03927 7.37277 2.89628 7.24909L7.67524 6.55582L9.81121 2.24644Z"
                      fill="#FDBC7D"
                    />
                  </svg>
                </div>
                <p className={style.prate}>CBSE</p>
              </div>
            </div>
            <div className={style.name}>
              <h3 className="schoolname">{item.name}</h3>
              <p className={style.state}>{item.state}</p>
            </div>
            <button className={style.apply}>
              <h3>Apply Now</h3>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Schools;
