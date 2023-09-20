import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ResultImg from './../assets/resultimg.svg';


const Page = () => {

  const { resultData } = useSelector((state) => state.resultData);

  const [resultText, setResultText] = useState('');


  useEffect(() => {
    if (resultData > 0.0 && resultData < 12.0) {
      setResultText(
        'From the above PM2.5 value, we can understand that the quality of air is GOOD.'
      );
    } else if (resultData > 12.1 && resultData < 35.4) {
      setResultText(
        'From the above PM2.5 value, we can understand that the quality of air is MODERATE.'
      );
    } else if (resultData > 35.5 && resultData < 55.4) {
      setResultText(
        'From the above PM2.5 value, we can understand that the quality of air is UNHEALTHY FOR SENSITIVE GROUPS.'
      );
    } else if (resultData > 55.5 && resultData < 150.4) {
      setResultText(
        'From the above PM2.5 value, we can understand that the quality of air is UNHEALTHY.'
      );
    } else if (resultData > 150.5 && resultData < 250.4) {
      setResultText(
        'From the above PM2.5 value, we can understand that the quality of air is VERY UNHEALTHY.'
      );
    } else if (resultData > 250.5 && resultData < 500.4) {
      setResultText(
        'From the above PM2.5 value, we can understand that the quality of air is HAZARDOUS.'
      );
    }
  }, [resultText]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="mb-10 object-cover object-center rounded w-1/12"
            alt="hero"
            src={ResultImg}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font text-xl lg:text-2xl mb-4 font-medium text-green-700 font-poppins tracking-wide">
              Result of the Prediction
            </h1>
            <p className="mb-8 leading-relaxed text-green-600 text-lg lg:text-xl font-poppins">
            PM2.5(Particles with a diameter of 2.5 micrometers or smaller) air pollutant level in air:{' '}
              <span className="font-semibold tracking-wide">{resultData ? `${resultData} µg/m³` : 'No result to display'}</span>

              <span className='block mt-4 font-poppins text-green-700 text-lg lg:text-2xl italic uppercase'>{resultText && resultText}</span>
            </p>
            <div className="flex justify-center">
              <NavLink to='/airqualityform'>
                <button className="inline-flex tracking-wide text-white bg-green-500 border-0 py-3 px-6 shadow-lg focus:outline-none hover:bg-green-600 rounded text-lg">
                  Return back to Air Quality Form
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
