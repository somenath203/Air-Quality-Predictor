import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AirQualityImg from './../assets/airformimg.svg';
import { setResult } from './../redux/resultSlice';


const Page = () => {

  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();

  const [loading, setLoading] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const onSubmitForm = async (e) => {

    e.preventDefault();

    try {
      if (!(year && month && day && hour)) {

        toast.error('Please fill all the input fields', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      } else {

        setLoading(true);

        const { data } = await axios.post(process.env.REACT_APP_FASTAPI_BACKEND, {
          yearNo: Number(year),
          monthNo: Number(month),
          dayNo: Number(day),
          hourNo: Number(hour),
        });

        setLoading(false);

        toast.success('Prediction made successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

        dispatch(setResult(Number(data?.pred_result).toFixed(1)));

        navigate('/resultpage');

      }
    } catch (error) {

      setLoading(false);

      toast.error('Something went wrong!! Please try again after some time', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-10/12">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded hidden lg:block"
            alt="hero"
            src={AirQualityImg}
          />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-right mb-16 md:mb-0 items-center text-center">
          <p className="font-poppins text-lg lg:text-2xl text-green-600 tracking-wide mb-6 lg:mb-4">
            Air Quality Prediction Form
          </p>

          <form
            className="flex flex-col gap-3 w-full lg:w-9/12"
            onSubmit={onSubmitForm}
          >
            <input
              type="number"
              className="border-2 border-green-500 p-1 rounded-lg text-black"
              placeholder="enter year of the measure"
              onChange={(e) => setYear(e.target.value)}
            />
            <input
              type="number"
              className="border-2 border-green-500 p-1 rounded-lg text-black"
              placeholder="enter month of the measure"
              onChange={(e) => setMonth(e.target.value)}
            />
            <input
              type="number"
              className="border-2 border-green-500 p-1 rounded-lg text-black"
              placeholder="enter day of the measure"
              onChange={(e) => setDay(e.target.value)}
            />
            <input
              type="number"
              className="border-2 border-green-500 p-1 rounded-lg text-black"
              placeholder="enter hour of the measure"
              onChange={(e) => setHour(e.target.value)}
            />

            {loading ? (
              <i className="fa-solid fa-rotate text-green-600 text-center text-4xl animate-spin mt-2"></i>
            ) : (
              <>
                <button className="w-full py-2 px-4 text-lg lg:text-2xl rounded-lg font-poppins tracking-wide bg-green-600 text-white">
                  Predict
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
