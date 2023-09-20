import { Typewriter } from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';

import WelcomePageImg from './../assets/welcomepageimg.svg';

const Page = () => {
    return (
        <>
            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-10/12">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-700 tracking-wide font-poppins">
                            Welcome to
                            <br className="hidden lg:inline-block tracking-wide text-green-700" />{' '}
                            Air Quality Predictor
                        </h1>
                        <p className="mb-8 leading-relaxed text-lg tracking-wide text-green-600 font-poppins">
                            <Typewriter
                                words={[
                                    'Predict the Quality of the air to know how much particle it contains.',
                                    'Poor air quality is linked to a range of adverse health effects, including respiratory diseases',
                                    'Accurate air quality predictions help raise public awareness about the severity of air pollution and its potential health consequences.',
                                    ' Poor air quality not only affects human health but it also has negative impacts on the environment.',
                                ]}
                                loop={false}
                                cursor={true}
                            />
                        </p>
                        <div className="flex justify-center">
                            <NavLink to='/airqualityform'>
                                <button className="ml-4 inline-flex text-green-800 border-4 border-green-500 bg-white py-4 px-8 focus:outline-none hover:scale-140 hover:border-green-800 hover:text-green-700 text-center rounded-lg text-xl tracking-wide animate duration-300">
                                    Get Started
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded animate animate-bounce"
                            alt="hero"
                            src={WelcomePageImg}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
