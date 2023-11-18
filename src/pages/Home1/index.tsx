import React from "react";

import { Button, FloatingInput, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-barricadawregular items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-start md:px-5 w-full">
          <div className="overflow-x-auto w-full">
            <div className="md:h-[1464px] sm:h-[3581px] h-[6788px] overflow-auto relative w-full">
              <div className="absolute bottom-[10%] md:h-[1464px] sm:h-[3581px] h-[5164px] right-[0] w-[88%] md:w-full">
                <div className="absolute md:h-[1464px] h-[3581px] inset-[0] justify-center m-auto w-full">
                  <div className="md:h-[1464px] h-[3581px] m-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[2157px] items-center justify-start w-full">
                        <div className="bg-cyan-50 border-gray-900 border-solid border-y-[3px] flex flex-row items-start justify-start w-auto md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 gap-[90px] items-center justify-start w-3/4">
                            <Img
                              className="h-[328px] sm:h-auto object-cover w-[427px] md:w-full"
                              src="images/img_vector.png"
                              alt="vector"
                            />
                            <div className="flex flex-col gap-[38px] items-start justify-start w-auto sm:w-full">
                              <Text
                                className="md:text-5xl text-[76px] text-gray-900 w-auto"
                                size="txtBarricadaW01Regular76"
                              >
                                Pixel-by-pixel
                              </Text>
                              <Text
                                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                                size="txtRubikRegular26"
                              >
                                <span className="text-gray-900 font-rubik text-left font-normal">
                                  <>
                                    Our 3D art is a testament to craftsmanship
                                    and dedication. We didn&#39;t rely on
                                    artificial intelligence; instead, every
                                    pixel was meticulously hand-drawn with care
                                    and precision, one cursor click at a time.{" "}
                                    <br />
                                    Countless hours were poured into crafting
                                    each detail, ensuring that every Kiki Koala
                                    in the{" "}
                                  </>
                                </span>
                                <span className="text-gray-900 font-rubik text-left font-normal">
                                  Kiki Kollective
                                </span>
                                <span className="text-gray-900 font-rubik text-left font-normal">
                                  {" "}
                                  capture the labour of love.
                                </span>
                              </Text>
                              <Button
                                className="border border-gray-900 border-solid cursor-pointer font-bebasneue leading-[normal] min-w-[235px] rounded-[29px] md:text-2xl sm:text-[22px] text-[26px] text-center"
                                color="white_A700"
                                size="sm"
                                variant="fill"
                              >
                                Learn ABOUT THE ART
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="h-[754px] relative w-full">
                          <Img
                            className="h-[754px] m-auto object-cover w-full"
                            src="images/img_rectangle4.png"
                            alt="rectangleFour"
                          />
                          <div className="absolute bottom-[14%] flex flex-col gap-[38px] items-start justify-start right-[11%] w-auto">
                            <Text
                              className="max-w-[550px] md:max-w-full md:text-5xl text-[76px] text-gray-900"
                              size="txtBarricadaW01Regular76"
                            >
                              Kiki Koalas ecosystem
                            </Text>
                            <Text
                              className="max-w-[553px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                              size="txtRubikRegular26"
                            >
                              Our vision extends far beyond creating remarkable
                              NFTs. We are committed to building an expansive
                              ecosystem of utility that will propel Kiki Koalas
                              into a colossal Web3 brand.
                            </Text>
                            <FloatingInput
                              wrapClassName="placeholder:bg-white-A700 font-bebasneue leading-[normal] placeholder:left-[30px] p-0 sm:px-5 text-[26px] placeholder:text-gray-900 text-gray-900 text-left placeholder:top-[0] w-full"
                              className="font-bebasneue leading-[normal] p-0 sm:px-5 text-[26px] text-gray-900 text-left w-full"
                              name="learnmore"
                              labelClasses="bg-white-A700 left-[30px] top-[0] text-gray-900"
                              focusedClasses="translate-y-[11px] scale-[1]"
                              wrapperClasses="sm:w-full sm:mx-0 w-[30%] top-[0]"
                              labelText="Soon"
                              defaultText="White paper"
                            ></FloatingInput>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-x-[0] mx-auto top-[22%] w-[1440px] md:w-full">
                      <div className="flex m-auto w-full">
                        <div className="bg-light_green-100 border-gray-900 border-solid border-y-[3px] h-[933px] my-auto w-1/2"></div>
                        <div className="bg-light_green-100 border-gray-900 border-solid border-y-[3px] flex flex-col gap-2.5 items-center justify-center ml-[-3px] my-auto p-[60px] md:px-10 sm:px-5 w-[51%] z-[1]">
                          <Img
                            className="h-[581px] md:h-auto mt-[85px] object-cover w-[91%]"
                            src="images/img_image107.png"
                            alt="image107"
                          />
                          <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col items-center justify-end mb-[78px] p-[5px] rounded-[29px] shadow-bs2 w-[17%] md:w-full">
                            <Img
                              className="h-12 w-12"
                              src="images/img_rotate3601.svg"
                              alt="rotate3601"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col gap-[38px] h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-auto">
                        <Img
                          className="h-12 w-[49px]"
                          src="images/img_vector7.svg"
                          alt="vectorSeven"
                        />
                        <Text
                          className="max-w-[462px] md:max-w-full md:text-5xl text-[76px] text-gray-900"
                          size="txtBarricadaW01Regular76"
                        >
                          A tangible kollectible
                        </Text>
                        <Text
                          className="max-w-[620px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                          size="txtRubikRegular36"
                        >
                          At Kiki Koalas, we believe in making your NFT
                          ownership experience truly tangible. When you own a
                          Kiki Koala, you unlock access to 3D files for endless
                          creative possibilities.{" "}
                        </Text>
                        <FloatingInput
                          wrapClassName="placeholder:bg-white-A700 font-bebasneue leading-[normal] placeholder:left-[30px] p-0 sm:px-5 text-[26px] placeholder:text-gray-900 text-gray-900 text-left placeholder:top-[0] w-full"
                          className="font-bebasneue leading-[normal] p-0 sm:px-5 text-[26px] text-gray-900 text-left w-full"
                          name="learnmore_One"
                          labelClasses="bg-white-A700 left-[30px] top-[0] text-gray-900"
                          focusedClasses="translate-y-[11px] scale-[1]"
                          wrapperClasses="sm:w-full sm:mx-0 w-1/4 top-[0]"
                          labelText="Soon"
                          defaultText="3d library"
                        ></FloatingInput>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-cyan-50 border-[3px] border-black-900 border-solid bottom-1/4 flex flex-row inset-x-[0] items-center justify-start max-w-[1440px] mx-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[91%]">
                      <div className="bg-pink-50 border-gray-900 border-r-[3px] border-solid border-y-[3px] flex flex-col items-start justify-center p-28 md:px-10 sm:px-5 w-[56%] md:w-full">
                        <div className="flex flex-col gap-[38px] items-start justify-start my-[101px] w-auto sm:w-full">
                          <Img
                            className="h-12 w-[49px]"
                            src="images/img_vector7.svg"
                            alt="vectorSeven_One"
                          />
                          <Text
                            className="max-w-[462px] md:max-w-full md:text-5xl text-[76px] text-gray-900"
                            size="txtBarricadaW01Regular76"
                          >
                            Meet the team
                          </Text>
                          <Text
                            className="max-w-[462px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                            size="txtRubikRegular36"
                          >
                            Sink your claws into the team leading the Kiki
                            Koalas to lofty gum tree tops.
                          </Text>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-bebasneue leading-[normal] min-w-[190px] rounded-[29px] md:text-2xl sm:text-[22px] text-[26px] text-center"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            Stalk the team
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[38px] items-start justify-start w-auto sm:w-full">
                        <Img
                          className="h-12 w-[49px]"
                          src="images/img_vector7.svg"
                          alt="vectorSeven_Two"
                        />
                        <Text
                          className="max-w-[462px] md:max-w-full md:text-5xl text-[76px] text-gray-900"
                          size="txtBarricadaW01Regular76"
                        >
                          Hang out with us
                        </Text>
                        <Text
                          className="max-w-[462px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                          size="txtRubikRegular36"
                        >
                          Kick it with us in our tree tops where we sleep, eat
                          and repeat.
                        </Text>
                        <div className="font-bebasneue sm:px-5 px-[30px] py-3.5 relative w-[162px]">
                          <div className="flex h-[45px] md:h-[59px] justify-end mt-auto mx-auto w-full">
                            <div className="bg-white-A700 border border-gray-900 border-solid h-[59px] mt-auto mx-auto rounded-[29px] shadow-bs w-full"></div>
                            <div className="absolute bottom-[0] flex flex-row gap-1.5 inset-x-[0] items-start justify-center mx-auto w-[63%]">
                              <Img
                                className="h-[29px] mt-[3px] w-[29px]"
                                src="images/img_frame3466604.svg"
                                alt="frame3466604"
                              />
                              <Text
                                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
                                size="txtBebasNeueRegular26"
                              >
                                Discord
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bg-amber-300 border border-gray-900 border-solid justify-center pl-2 py-1 right-[1%] rotate-[4deg] rounded-[14px] text-base text-gray-900 top-[0] w-auto"
                            size="txtBebasNeueRegular16"
                          >
                            Soon
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-amber-300 border-gray-900 border-solid border-y-[3px] flex flex-col inset-x-[0] items-center justify-end mx-auto py-7 top-[27%] w-full">
                  <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                    <Text
                      className="md:text-5xl text-6xl text-center text-gray-900 uppercase"
                      size="txtBarricadaW01Regular60"
                    >
                      Kiki, do you love me? Are you HUNGRY? Say you’ll never
                      eveR EAT ME.{" "}
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-amber-300 border-gray-900 border-solid border-y-[3px] bottom-[31%] flex flex-col inset-x-[0] items-center justify-end mx-auto py-[30px] w-full">
                  <div className="flex flex-col items-center justify-start mt-1 w-full">
                    <Text
                      className="md:text-5xl text-6xl text-center text-gray-900 uppercase"
                      size="txtBarricadaW01Regular60"
                    >
                      We hungry. We sleepy. Lofty gum tree tops are where your
                      will find use. Either sleeping or eating.
                    </Text>
                  </div>
                </div>
                <div className="absolute border-gray-900 border-solid border-y-[3px] flex flex-col gap-[38px] inset-x-[0] items-end justify-start mx-auto md:px-10 sm:px-5 px-[365px] py-[158px] top-[0] w-auto md:w-full">
                  <div className="font-barricadawregular relative w-full">
                    <Text
                      className="m-auto md:text-5xl text-[86px] text-center text-gray-900_01 w-full"
                      size="txtBarricadaW01Regular86"
                    >
                      Say hello to the Kiki Koalas
                    </Text>
                    <Img
                      className="absolute bottom-[7%] h-[94px] left-[35%] object-cover w-[94px]"
                      src="images/img_2greyfur.png"
                      alt="2greyfur"
                    />
                  </div>
                  <Text
                    className="max-w-[710px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-center text-gray-900"
                    size="txtRubikRegular26"
                  >
                    <>
                      Introducing the Kiki Koalas – 3,333 adorable Koalas that
                      kick back at the Kiki Kollective! The Kiki Koalas are not
                      only about the 3D art; it&#39;s about nurturing a
                      welcoming and tightly-knit community. Each Kiki Koala
                      brings us together, forming bonds and friendships that
                      transcend pixels and screens.
                    </>
                  </Text>
                </div>
                <div className="absolute bg-yellow-100 border-gray-900 border-solid border-y-[3px] bottom-[0] flex flex-col inset-x-[0] items-center justify-center max-w-[1440px] mx-auto md:px-10 sm:px-5 px-[232px] py-[158px] w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="font-barricadawregular relative w-full">
                      <Text
                        className="m-auto md:text-5xl text-[86px] text-center text-gray-900_01 w-full"
                        size="txtBarricadaW01Regular86"
                      >
                        Supporting Koala konservation
                      </Text>
                      <Img
                        className="absolute h-[94px] object-cover right-[32%] top-[0] w-[94px]"
                        src="images/img_2greyfur_94x94.png"
                        alt="2greyfur_One"
                      />
                    </div>
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-center text-gray-900 w-[73%] sm:w-full"
                      size="txtRubikRegular26"
                    >
                      <>
                        At Kiki Koalas, we&#39;re dedicated to protecting koalas
                        from the wild and natural disasters in Australia. We
                        will donate a portion of our raised funds to koala
                        conservation efforts, helping to ensure their safety and
                        survival. By collecting Kiki Koalas NFTs, you contribute
                        to this vital cause, making a difference in the lives of
                        these beloved Australian icons.
                      </>
                    </Text>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-bebasneue leading-[normal] min-w-[159px] rounded-[29px] md:text-2xl sm:text-[22px] text-[26px] text-center"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute font-bebasneue sm:h-[1020px] md:h-[1200px] h-[959px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute sm:h-[1020px] md:h-[1200px] h-[959px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                  <div className="md:h-[1200px] sm:h-[958px] h-[959px] m-auto w-full">
                    <div className="absolute bg-amber-300 flex flex-col gap-14 h-full inset-y-[0] items-center justify-start my-auto pb-[638px] right-[0] w-[88%] md:w-full">
                      <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                      <Img
                        className="h-[115px]"
                        src="images/img_group7990.svg"
                        alt="group7990"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[292px] left-[0]"
                      src="images/img_vector11.svg"
                      alt="vectorEleven"
                    />
                  </div>
                  <div className="absolute bottom-[0] sm:h-[1020px] h-[572px] right-[7%] w-[73%] md:w-full">
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Img
                          className="h-[510px] md:h-auto object-cover"
                          src="images/img_bbfa98ae054f4.png"
                          alt="bbfa98ae054fFour"
                        />
                        <Img
                          className="h-[510px] md:h-auto object-cover"
                          src="images/img_3d1bf1b2c6364.png"
                          alt="3d1bf1b2c6364"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-[572px] inset-[0] justify-center m-auto object-cover w-[49%]"
                      src="images/img_6581203ec6cc4.png"
                      alt="6581203ec6ccFour"
                    />
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[292px] right-[0]"
                  src="images/img_vector10.svg"
                  alt="vectorTen"
                />
              </div>
              <div className="absolute bg-gray-100 border-gray-900 border-solid border-y-[3px] bottom-[0] flex flex-col font-barricadawregular items-center justify-start p-[148px] md:px-10 sm:px-5 right-[0] w-[88%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[71%] md:w-full">
                  <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                    <div className="h-[104px] relative w-full">
                      <Text
                        className="m-auto md:text-5xl text-[86px] text-center text-gray-900_01"
                        size="txtBarricadaW01Regular86"
                      >
                        Konnect with us
                      </Text>
                      <Img
                        className="absolute h-[94px] inset-y-[0] my-auto object-cover right-[41%] w-[94px]"
                        src="images/img_2greyfur_94x94.png"
                        alt="2greyfur_Two"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row font-matter md:gap-5 items-center justify-start w-[78%] md:w-full">
                      <div className="bg-white-A700 border-[3px] border-black-900 border-solid flex flex-col gap-1.5 justify-center p-4 rotate-[-6deg] rounded-[20px] shadow-bs1 w-[33%] md:w-full">
                        <div className="bg-black-900 border-[3px] border-gray-900 border-solid flex flex-col items-center justify-end ml-1 md:ml-[0] p-[33px] sm:px-5 rounded-[10px] w-[97%] md:w-full">
                          <Img
                            className="h-[75px] w-[75px]"
                            src="images/img_frame3466603.svg"
                            alt="frame3466603"
                          />
                        </div>
                        <Text
                          className="mb-4 md:ml-[0] ml-[26px] mr-[37px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl uppercase"
                          size="txtMatterSemiBold24"
                        >
                          Twitter
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-[3px] border-black-900 border-solid flex flex-col gap-3.5 items-center justify-center md:ml-[0] ml-[18px] md:mt-0 my-[9px] p-[15px] rounded-[20px] shadow-bs1 w-[30%] md:w-full">
                        <div className="bg-indigo-A200 border-[3px] border-black-900 border-solid flex flex-col items-center justify-start mt-0.5 p-[30px] sm:px-5 rounded-[10px] w-full">
                          <Img
                            className="h-[69px] w-[69px]"
                            src="images/img_frame3466604_white_a700.svg"
                            alt="frame3466604_Two"
                          />
                        </div>
                        <Text
                          className="mb-[9px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl uppercase"
                          size="txtMatterSemiBold24"
                        >
                          Discord
                        </Text>
                      </div>
                      <div className="bg-white-A700 border-[3px] border-black-900 border-solid flex flex-col justify-start md:ml-[0] ml-[17px] p-4 rotate-[7deg] rounded-[20px] shadow-bs1 w-[33%] md:w-full">
                        <div className="bg-light_blue-A700 border-[3px] border-black-900 border-solid flex flex-col items-center justify-start mr-[5px] p-11 md:px-10 sm:px-5 rounded-[10px] w-[96%] md:w-full">
                          <Img
                            className="h-[58px]"
                            src="images/img_group.svg"
                            alt="group"
                          />
                        </div>
                        <Text
                          className="mb-[11px] md:ml-[0] ml-[31px] text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl uppercase"
                          size="txtMatterSemiBold24"
                        >
                          telegram
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-rubik items-center pl-[200px] md:px-5 w-full">
          <Footer className="bg-amber-300 border-gray-900 border-solid border-t-[3px] flex items-center justify-center w-full" />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
