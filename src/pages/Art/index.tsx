import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ArtPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-gray-300 font-bebasneue md:h-[581px] h-[710px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] h-[581px] left-[0] w-3/4 md:w-full">
            <div className="absolute h-[563px] inset-[0] justify-center m-auto w-full">
              <div className="absolute flex flex-col items-center justify-start right-[0] top-[15%] w-[67%]">
                <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                  <Text
                    className="md:text-5xl text-[86px] text-center text-gray-900_01 w-full"
                    size="txtBarricadaW01Regular86"
                  >
                    Krafting the Kiki Koalas
                  </Text>
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-center text-gray-900 w-full"
                    size="txtMatterRegular26"
                  >
                    <>
                      Our 3D art is a living tribute to artistry and unwavering
                      commitment. We broke free from the grasp of 2D art and
                      artificial intelligence, crafting every pixel with an
                      artist&#39;s touch, one cursor click at a time.
                    </>
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[563px] inset-y-[0] left-[0] my-auto object-cover w-[54%]"
                src="images/img_image107_563x571.png"
                alt="image107"
              />
            </div>
            <Img
              className="absolute h-[581px] inset-y-[0] left-[24%] my-auto object-cover w-[31%]"
              src="images/img_image108.png"
              alt="image108"
            />
          </div>
          <Header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="bg-amber-300 border-gray-900 border-solid border-y-[3px] flex flex-col font-barricadawregular items-center justify-end py-[30px] w-full">
          <div className="flex flex-col items-center justify-start mt-1 w-full">
            <Text
              className="md:text-5xl text-6xl text-center text-gray-900 uppercase"
              size="txtBarricadaW01Regular60"
            >
              Unveiling the Kreation of the Kiki Koalas and our kreative
              kompass.
            </Text>
          </div>
        </div>
        <Text
          className="mt-[148px] md:text-5xl text-[86px] text-center text-gray-900_01 w-1/2 sm:w-full"
          size="txtBarricadaW01Regular86"
        >
          The keystones to our koalas
        </Text>
        <div className="flex flex-col gap-[-2px] items-center justify-center max-w-[1440px] mt-[147px] w-full">
          <List
            className="flex flex-col items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-[-3px] items-start justify-start max-w-[1440px] w-full">
              <div className="bg-light_green-100 border-gray-900 border-r-[3px] border-solid border-y-[3px] flex md:flex-1 flex-col items-start justify-start p-[111px] md:px-5 w-[51%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start mb-[69px] mt-[62px] w-auto sm:w-full">
                  <Text
                    className="md:text-5xl text-[66px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular66"
                  >
                    The base
                  </Text>
                  <Text
                    className="max-w-[462px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtRubikRegular36"
                  >
                    <>
                      The foundation of our Kiki Koalas art begins with a focus
                      on &quot;The Base.&quot; Every Koala starts as a digital
                      canvas, a blank slate, ready to be infused with
                      personality and charm. The clay-base serves as a digital
                      canvas ready to infused the vibrant personalities of our
                      Koalas.
                    </>
                  </Text>
                </div>
              </div>
              <div className="border-gray-900 border-l-[3px] border-solid border-y-[3px] md:h-[751px] h-[933px] pl-[18px] md:px-5 py-[18px] relative w-[51%] md:w-full">
                <div className="absolute bg-gray-300_01 border border-black-900 border-solid bottom-[9%] h-[102px] inset-x-[0] mx-auto rounded-[247px] shadow-bs w-[69%]"></div>
                <Img
                  className="absolute h-[751px] inset-[0] justify-center m-auto object-cover w-[98%]"
                  src="images/img_image107_751x703.png"
                  alt="image107"
                />
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[-3px] items-center justify-center max-w-[1440px] w-full">
              <div className="bg-pink-50 border-gray-900 border-r-[3px] border-solid border-y-[3px] flex md:flex-1 flex-col items-start justify-start p-[111px] md:px-5 w-[51%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start mb-[47px] mt-[41px] w-auto sm:w-full">
                  <Text
                    className="md:text-5xl text-[66px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular66"
                  >
                    The fur
                  </Text>
                  <Text
                    className="max-w-[462px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtRubikRegular36"
                  >
                    <>
                      &quot;The Fur&quot; serves as the touchpoint where we
                      strive for realism, inviting you to reach out and feel the
                      softness, even in the digital realm. Our commitment to
                      authenticity extends to the tiniest of details. Each fur
                      trait is meticulously designed to resonate the cozy warmth
                      and softness that Koalas are known for.{" "}
                    </>
                  </Text>
                </div>
              </div>
              <div className="border-gray-900 border-l-[3px] border-solid border-y-[3px] md:h-[751px] h-[933px] pl-[18px] md:px-5 py-[18px] relative w-[51%] md:w-full">
                <div className="absolute bg-gray-300_01 border border-black-900 border-solid bottom-[9%] h-[102px] inset-x-[0] mx-auto rounded-[247px] shadow-bs w-[69%]"></div>
                <Img
                  className="absolute h-[751px] inset-[0] justify-center m-auto object-cover w-[98%]"
                  src="images/img_image107_1.png"
                  alt="image107"
                />
              </div>
            </div>
          </List>
          <List
            className="flex flex-col items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-[-3px] items-center justify-center max-w-[1440px] w-full">
              <div className="bg-gray-300 border-gray-900 border-r-[3px] border-solid border-y-[3px] flex md:flex-1 flex-col items-start justify-start p-[107px] md:px-5 w-[51%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start ml-1 md:ml-[0] w-auto sm:w-full">
                  <Text
                    className="md:text-5xl text-[66px] text-gray-900 w-auto"
                    size="txtBarricadaW01Regular66"
                  >
                    The hunger
                  </Text>
                  <Text
                    className="max-w-[462px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtRubikRegular36"
                  >
                    <>
                      &quot;The Hunger” is where we explore the culinary
                      curiosities of our Koalas. Their appetites reflect their
                      distinct personalities - savouring their favourite treats
                      as expressive as their individuality. Here, they satisfy
                      not only cravings but also their appetite for whimsical
                      stories.
                    </>
                  </Text>
                </div>
              </div>
              <div className="border-gray-900 border-l-[3px] border-solid border-y-[3px] flex md:flex-1 flex-col items-end justify-end pl-[41px] pt-[41px] md:px-5 w-[51%] md:w-full">
                <Img
                  className="h-[750px] md:h-auto mt-[39px] object-cover w-full"
                  src="images/img_image107_750x680.png"
                  alt="image107"
                />
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[-3px] items-center justify-center max-w-[1440px] w-full">
              <div className="bg-cyan-50 border-gray-900 border-r-[3px] border-solid border-y-[3px] flex md:flex-1 flex-col items-start justify-start p-[90px] md:px-5 w-[51%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[21px] w-auto sm:w-full">
                  <Text
                    className="max-w-[462px] md:max-w-full md:text-5xl text-[66px] text-gray-900"
                    size="txtBarricadaW01Regular66"
                  >
                    The expressions
                  </Text>
                  <Text
                    className="max-w-[462px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtRubikRegular36"
                  >
                    <>
                      &quot;The Expressions&quot; capture the heart and soul of
                      our Kiki Koalas, making them more than static digital
                      creations – they&#39;re living, emotive beings. From
                      playful grins to inquisitive glances, the Koalas&#39;
                      facial expressions mirror their personalities and resonate
                      with your own emotions.
                    </>
                  </Text>
                </div>
              </div>
              <div className="border-gray-900 border-l-[3px] border-solid border-y-[3px] flex md:flex-1 flex-col items-end justify-end pl-[41px] pt-[41px] md:px-5 w-[51%] md:w-full">
                <Img
                  className="h-[750px] md:h-auto mt-[39px] object-cover w-full"
                  src="images/img_image107_2.png"
                  alt="image107"
                />
              </div>
            </div>
          </List>
          <div className="flex md:flex-col flex-row gap-[-3px] items-center justify-center max-w-[1440px] w-full">
            <div className="bg-yellow-100 border-gray-900 border-r-[3px] border-solid border-y-[3px] flex md:flex-1 flex-col items-start justify-start p-[111px] md:px-5 w-[51%] md:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start mb-[47px] mt-10 w-auto sm:w-full">
                <Text
                  className="md:text-5xl text-[66px] text-gray-900 w-auto"
                  size="txtBarricadaW01Regular66"
                >
                  The fashion
                </Text>
                <Text
                  className="max-w-[462px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                  size="txtRubikRegular36"
                >
                  <>
                    &quot;The Fashion&quot; is where we dress our Kiki Koalas in
                    individuality. Exploring accessories and styles amplifies
                    their personalities. Style statements made with a
                    combination of clothes and/or accessories, add an extra
                    layer of charm to their charismatic presence in the Kiki
                    Kollective.
                  </>
                </Text>
              </div>
            </div>
            <div className="border-gray-900 border-l-[3px] border-solid border-y-[3px] md:h-[751px] h-[933px] pl-[18px] md:px-5 py-[18px] relative w-[51%] md:w-full">
              <div className="absolute bg-gray-300_01 border border-black-900 border-solid bottom-[9%] h-[102px] inset-x-[0] mx-auto rounded-[247px] shadow-bs w-[69%]"></div>
              <Img
                className="absolute h-[751px] inset-[0] justify-center m-auto object-cover w-[98%]"
                src="images/img_image107_3.png"
                alt="image107_One"
              />
            </div>
          </div>
        </div>
        <Footer className="bg-amber-300 border-gray-900 border-solid border-t-[3px] flex font-rubik items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ArtPage;
