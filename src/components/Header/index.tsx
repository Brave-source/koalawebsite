import React from "react";

import { Button, Img } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col h-[76px] items-center justify-start md:ml-[0] ml-[54px] md:mt-0 my-9 p-3.5 rounded-[16px] shadow-bs1 w-[76px]">
          <Img
            className="h-[30px] my-[9px]"
            src="images/img_layer1.svg"
            alt="layerOne"
          />
        </div>
        <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[978px] mr-[54px] md:mt-0 my-[41px] w-auto">
          <Button
            className="border border-gray-900 border-solid flex h-[66px] items-center justify-center w-[66px]"
            shape="circle"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img className="h-[30px]" src="images/img_sm.svg" alt="sm" />
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
              alt="frame3466604"
            />
          </Button>
          <Button
            className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[126px] rounded-[33px]"
            leftIcon={
              <Img
                className="mt-[11px] mb-2"
                src="images/img_frame_3466612.svg"
                alt="Frame 3466612"
              />
            }
            color="white_A700"
            size="md"
            variant="fill"
          >
            <div className="font-bebasneue leading-[normal] md:text-2xl sm:text-[22px] text-[26px] text-left">
              Menu
            </div>
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
