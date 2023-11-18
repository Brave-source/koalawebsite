import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const FAQPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-start mx-auto w-full">
        <Header className="flex md:flex-col flex-row font-bebasneue md:gap-5 items-center justify-center md:px-5 w-full" />
        <Text
          className="mt-[84px] md:text-5xl text-[86px] text-center text-gray-900_01"
          size="txtBarricadaW01Regular86"
        >
          FAQs
        </Text>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[920px] mt-[98px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 border-[3px] border-black-900 border-solid flex sm:flex-col flex-row font-barricadawregular gap-2.5 items-center justify-center sm:px-5 px-[30px] py-5 rounded-[17px] shadow-bs3 w-auto md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto"
              size="txtBarricadaW01Regular36"
            >
              What is a Kiki Koala?
            </Text>
            <Img className="h-10 w-[41px]" src="images/img_.svg" alt="One" />
          </div>
          <div className="bg-white-A700 border-[3px] border-black-900 border-solid flex sm:flex-col flex-row font-barricadawregular gap-2.5 items-center justify-center sm:px-5 px-[30px] py-5 rounded-[17px] shadow-bs3 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto"
              size="txtBarricadaW01Regular36"
            >
              How many Koalas exist?
            </Text>
            <Img
              className="h-[15px] w-6"
              src="images/img__gray_900_01.svg"
              alt="Two"
            />
          </div>
          <Text
            className="max-w-[920px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
            size="txtRubikRegular26"
          >
            <>
              A Kiki Koala is a unique and endearing digital character
              that&#39;s part of our exclusive NFT collection. These koalas are
              brought to life through intricate 3D art, each with its own
              distinct personality and charm. They are more than just digital
              assets; they are collectible pieces of art and a symbol of our
              vibrant community.
            </>
          </Text>
          <div className="bg-white-A700 border-[3px] border-black-900 border-solid flex md:flex-col flex-row font-barricadawregular gap-2.5 items-center justify-center sm:px-5 px-[30px] py-5 rounded-[17px] shadow-bs3 w-auto md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto"
              size="txtBarricadaW01Regular36"
            >
              Is the Kiki Koalas art original?
            </Text>
            <Img className="h-10 w-[41px]" src="images/img_.svg" alt="Three" />
          </div>
          <div className="bg-white-A700 border-[3px] border-black-900 border-solid flex flex-row font-barricadawregular gap-2.5 items-center justify-center sm:px-5 px-[30px] py-5 rounded-[17px] shadow-bs3 w-auto md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto"
              size="txtBarricadaW01Regular36"
            >
              Why 3D art?
            </Text>
            <Img className="h-10 w-[41px]" src="images/img_.svg" alt="Four" />
          </div>
        </div>
        <Footer className="bg-amber-300 border-gray-900 border-solid border-t-[3px] flex font-rubik items-center justify-center mt-[335px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default FAQPage;
