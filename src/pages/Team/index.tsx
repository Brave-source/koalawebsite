import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const TeamPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-barricadawregular items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start pb-[124px] w-full">
          <Header className="flex md:flex-col flex-row font-bebasneue md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="font-barricadawregular h-[243px] md:h-[253px] md:ml-[0] ml-[346px] mt-[47px] md:px-5 relative w-[59%] md:w-full">
            <Text
              className="absolute bottom-[0] left-[2%] md:text-5xl text-[86px] text-center text-gray-900_01 w-[85%] sm:w-full"
              size="txtBarricadaW01Regular86"
            >
              The Kiki Kommunity
            </Text>
            <Img
              className="absolute bottom-[6%] h-[130px] object-cover right-[0] w-[21%]"
              src="images/img_vector.png"
              alt="vector"
            />
            <Img
              className="absolute h-[108px] left-[0] object-cover top-[0] w-[17%]"
              src="images/img_vector_108x141.png"
              alt="vector_One"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[365px] mt-[21px] md:text-2xl sm:text-[22px] text-[26px] text-center text-gray-900 w-1/2 sm:w-full"
            size="txtMatterRegular26"
          >
            We are a dedicated team of builders, visionaries, operators, and
            creators, all aligned with a shared mission: propelling Kiki Koalas
            to become a loved Web3 brand anchored at the heart of the Cardano
            community.
          </Text>
        </div>
        <div className="bg-amber-300 border-gray-900 border-solid border-y-[3px] flex flex-col items-center justify-end py-[30px] w-full">
          <div className="flex flex-col items-center justify-start mt-1 w-full">
            <Text
              className="md:text-5xl text-6xl text-center text-gray-900 uppercase"
              size="txtBarricadaW01Regular60"
            >
              Kreativity. Kollaboration. Konnection. Kollectability. Kommunity.
              Konstruct. Kollective.
            </Text>
          </div>
        </div>
        <Text
          className="mt-[148px] md:text-5xl text-[86px] text-center text-gray-900_01 w-1/2 sm:w-full"
          size="txtBarricadaW01Regular86"
        >
          Meet the Kiki Kollective
        </Text>
        <div className="flex flex-col font-bebasneue items-start justify-start mt-[147px] w-auto md:w-full">
          <div className="md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="border-black-900 border-r-[3px] border-solid border-y-[3px] flex flex-1 flex-col gap-[37px] items-center justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-pink-50 border-black-900 border-r-[3px] border-solid border-y-[3px] flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_355x400.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[82px] text-center text-lg"
                  shape="round"
                  color="pink_50"
                  size="xs"
                  variant="fill"
                >
                  Founder
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Christian
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    Cardano class of 2017, 7-8 figure business builder,
                    engineer, product creator.
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-[3px] border-black-900 border-solid flex flex-1 flex-col gap-[37px] items-center justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-gray-300 border-[3px] border-black-900 border-solid flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_1.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[82px] text-center text-lg"
                  shape="round"
                  color="pink_50"
                  size="xs"
                  variant="fill"
                >
                  Founder
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Thomas
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    Obsessed with Cardano since 2021, engineer, beast operator,
                    jack of all trades, innovator.
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-black-900 border-l-[3px] border-solid border-y-[3px] flex flex-1 flex-col gap-[37px] items-center justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-cyan-50 border-black-900 border-l-[3px] border-solid border-y-[3px] flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_2.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[53px] text-center text-lg"
                  shape="round"
                  color="light_green_100"
                  size="xs"
                  variant="fill"
                >
                  CTO
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Harri
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    Solution architect, Cardano developer, open source lover,
                    previously work at MLabs.
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-black-900 border-r-[3px] border-solid border-y-[3px] flex flex-1 flex-col gap-[37px] items-center justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-light_green-100 border-black-900 border-r-[3px] border-solid border-y-[3px] flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_3.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[164px] text-center text-lg"
                  shape="round"
                  color="lime_100"
                  size="xs"
                  variant="fill"
                >
                  Blockchain developer
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Edmund
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    6 years full stack developer, 2 years Cardano blockchain.
                    Worked on Direct-Ed{" "}
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-[3px] border-black-900 border-solid flex flex-1 flex-col gap-[37px] items-center justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-yellow-100 border-[3px] border-black-900 border-solid flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_4.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-9 items-start justify-start w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[164px] text-center text-lg"
                  shape="round"
                  color="lime_100"
                  size="xs"
                  variant="fill"
                >
                  Blockchain developer
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Golddy
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    4 years full stack developer, 1.5 years Cardano blockchain.
                    Built Platypus Cyber Punks Staking.
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-black-900 border-l-[3px] border-solid border-y-[3px] flex flex-1 flex-col gap-[37px] items-center justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-cyan-50 border-black-900 border-l-[3px] border-solid border-y-[3px] flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_5.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[159px] text-center text-lg"
                  shape="round"
                  color="light_green_400"
                  size="xs"
                  variant="fill"
                >
                  Full Stack developer
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Emmanuel
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    3 years full stack developer, 1 year Cardano blockchain,
                    African dev community builder.
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-black-900 border-r-[3px] border-solid border-y-[3px] flex flex-1 flex-col gap-[37px] items-center justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-pink-50 border-black-900 border-r-[3px] border-solid border-y-[3px] flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_6.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[88px] text-center text-lg"
                  shape="round"
                  color="orange_300"
                  size="xs"
                  variant="fill"
                >
                  3D Artist
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Ben
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    Dreamer, visualiser, NFT lover. All about creating something
                    that sparks emotion.
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-[3px] border-black-900 border-solid flex flex-1 flex-col gap-[37px] items-center justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-cyan-50 border-[3px] border-black-900 border-solid flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_7.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[154px] text-center text-lg"
                  shape="round"
                  color="pink_50"
                  size="xs"
                  variant="fill"
                >
                  Community manager
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Rekt noob
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    Cardano freak, community builder, relationship manager.
                    Marketing degree.
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-black-900 border-l-[3px] border-solid border-y-[3px] flex flex-1 flex-col gap-[37px] justify-start pb-[54px] md:px-5 w-full">
              <div className="bg-light_green-100 border-black-900 border-l-[3px] border-solid border-y-[3px] flex flex-col items-center justify-start md:px-10 sm:px-5 px-[41px] w-full">
                <Img
                  className="h-[355px] md:h-auto object-cover w-full"
                  src="images/img_bbfa98ae054f4_8.png"
                  alt="bbfa98ae054fFour"
                />
              </div>
              <div className="flex flex-col gap-[31px] items-start justify-start ml-10 md:ml-[0] w-4/5 md:w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[115px] text-center text-lg"
                  shape="round"
                  color="blue_100"
                  size="xs"
                  variant="fill"
                >
                  Legal advisor
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular46"
                  >
                    Yowie
                  </Text>
                  <Text
                    className="max-w-[381px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRubikRegular26"
                  >
                    Cardano class of 2017. Technology, media and telco lawyer.{" "}
                  </Text>
                  <Button
                    className="border border-gray-900 border-solid flex h-16 items-center justify-center rounded-[14px] w-16"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_sm.svg"
                      alt="sm"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-amber-300 border-gray-900 border-solid border-t-[3px] flex font-rubik items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default TeamPage;
