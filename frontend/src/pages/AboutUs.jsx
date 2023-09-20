import { NavLink } from "react-router-dom";

const Page = () => {
  return (
    <>
      <section>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-xl text-2xl font-medium title-font mb-4 font-poppins tracking-wide text-green-600">
              About the Project
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed mt-3 text-sm lg:text-lg font-poppins text-green-700">
              The Air Quality Predictor is an A.I. powered project that
              predicts the quality of the air based on four parameters: year, month, day, and
              hour of the measure. The project uses a supervised machine
              learning algorithm called Random Forest Regressor to train a model on historical air quality
              data. The project was developed using the Python
              programming language and the Scikit-Learn machine learning
              library. The supervised machine learning algorithm used in the
              project is a random forest regressor. The model was trained on a
              dataset of historical air quality data. The accuracy of the model
              on the training data is around 99% and on testing data, the
              accuracy is around 96%. With the help of this project, one can predict the PM2.5(Particles with a diameter of 2.5 micrometers or smaller) level in air.
            </p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <NavLink to='/airqualityform' className='block m-auto'>
              <button class="text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded text-sm lg:text-lg shadow-lg">
                Back to Air Quality Form Page
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
