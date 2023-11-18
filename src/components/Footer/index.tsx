import React from "react";

import { Button, Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[41px] mt-[50px] mx-auto w-[93%]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-row gap-6 items-center justify-start sm:mt-0 mt-[5px] w-auto">
                <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col h-[76px] items-center justify-start p-3.5 rounded-[16px] shadow-bs1 w-[76px]">
                  <Img
                    className="h-[30px] my-[9px]"
                    src="images/img_layer1.svg"
                    alt="layerOne_One"
                  />
                </div>
                <Img
                  className="h-[35px] w-[261px]"
                  src="images/img_union.svg"
                  alt="union"
                />
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                <Button
                  className="border border-gray-900 border-solid flex h-[66px] items-center justify-center w-[66px]"
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-[30px]"
                    src="images/img_sm.svg"
                    alt="sm_One"
                  />
                </Button>
                <Button
                  className="border border-gray-900 border-solid flex h-[66px] items-center justify-center w-[66px]"
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-[29px]"
                    src="images/img_frame3466604.svg"
                    alt="frame3466604_One"
                  />
                </Button>
              </div>
            </div>
            <Text
              className="mt-[54px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-[54%] sm:w-full"
              size="txtRubikRegular26"
            >
              <span className="text-gray-900 font-rubik text-left font-normal">
                Kick back with{" "}
              </span>
              <span className="text-gray-900 font-rubik text-left font-normal">
                3,333
              </span>
              <span className="text-gray-900 font-rubik text-left font-normal">
                {" "}
                Kiki Koalas, as we create an ecosystem that{" "}
              </span>
              <span className="text-gray-900 font-rubik text-left font-normal">
                forms a community beyond pixels.
              </span>
            </Text>
            <ul className="flex flex-row gap-[26px] items-start justify-start mt-[41px] w-auto md:w-full common-column-list">
              <li>
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                  size="txtRubikRegular26"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                  size="txtRubikRegular26"
                >
                  Art
                </Text>
              </li>
              <li>
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                  size="txtRubikRegular26"
                >
                  Team
                </Text>
              </li>
              <li>
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                  size="txtRubikRegular26"
                >
                  FAQs
                </Text>
              </li>
            </ul>
            <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-start mt-[52px] w-auto sm:w-full">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
                size="txtRubikRegular26"
              >
                Privacy policy
              </Text>
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
                size="txtRubikRegular26"
              >
                Terms of service
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
