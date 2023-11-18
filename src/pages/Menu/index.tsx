import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const MenuPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-bebasneue items-center justify-start mx-auto pb-[101px] w-full">
        <div className="flex flex-col gap-[31px] items-center justify-start w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-barricadawregular md:gap-10 items-start justify-between max-w-[1332px] mx-auto md:px-5 w-full">
            <div className="md:h-[569px] h-[579px] md:mt-0 mt-[68px] relative w-[35%] md:w-full">
              <div className="absolute flex flex-col gap-[18px] h-max inset-[0] items-start justify-start m-auto w-auto">
                <Text
                  className="md:text-5xl text-[66px] text-gray-900 w-auto"
                  size="txtBarricadaW01Regular66"
                >
                  Home
                </Text>
                <Text
                  className="md:text-5xl text-[66px] text-gray-900 w-auto"
                  size="txtBarricadaW01Regular66"
                >
                  Art
                </Text>
                <div className="md:h-[79px] h-[89px] relative w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto md:text-5xl text-[66px] text-gray-900 text-shadow-ts top-[0] w-max"
                    size="txtBarricadaW01Regular66"
                  >
                    Team
                  </Text>
                  <Img
                    className="absolute bottom-[0] h-[63px] left-[33%]"
                    src="images/img_vector13.svg"
                    alt="vectorThirteen"
                  />
                </div>
                <Text
                  className="md:text-5xl text-[66px] text-gray-900 w-auto"
                  size="txtBarricadaW01Regular66"
                >
                  FAQs
                </Text>
                <div className="relative w-full">
                  <Text
                    className="mt-auto md:text-5xl text-[66px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular66"
                  >
                    White paper
                  </Text>
                  <Button
                    className="absolute border border-gray-900 border-solid cursor-pointer font-bebasneue leading-[normal] min-w-[54px] right-[0] rotate-[4deg] rounded-[18px] text-[22px] text-center sm:text-lg md:text-xl top-[0]"
                    shape="round"
                    color="amber_300"
                    size="xs"
                    variant="fill"
                  >
                    Soon
                  </Button>
                </div>
                <div className="relative w-[83%] sm:w-full">
                  <Text
                    className="mt-auto md:text-5xl text-[66px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular66"
                  >
                    3D Library
                  </Text>
                  <div className="absolute bg-amber-300 border border-gray-900 border-solid flex flex-col font-bebasneue items-center justify-center px-2 py-1 right-[0] rotate-[-4deg] rounded-[18px] top-[0] w-auto">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtBebasNeueRegular22"
                    >
                      Soon
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[63px] right-[11%]"
                src="images/img_vector13.svg"
                alt="vectorTwelve"
              />
            </div>
            <Img
              className="h-[751px] md:h-auto object-cover"
              src="images/img_2greyfur.png"
              alt="image108"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
