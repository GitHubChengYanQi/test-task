import React from "react";
import './index.css'
import {Menus} from "@/app/layout/TopLayout";


type MobileMenusProps = {
    onSign: Function,
    onScrollTop: Function,
}

const MobileMenus: React.FC<MobileMenusProps> = ({onSign, onScrollTop}) => {


    return <>
        <div
            className="fixed top-0 left-0 z-[1000] h-full w-full overflow-x-hidden overflow-y-scroll bg-mainBlack pt-[100px] md:hidden"
            onScroll={(event) => {
                const scrollTop = event.currentTarget.scrollTop
                onScrollTop(scrollTop)
            }}
        >
            <div className="px-[32px]">
                <div className="header-middle-menu flex flex-col">
                    <a
                        className="z-1 flex h-[40px] items-center whitespace-nowrap px-[12px] uppercase sm:py-[38px] sm:justify-center sm:whitespace-nowrap md:py-0 md:justify-start xl:h-[48px] xl:px-[16px] border-b border-grey"
                    >
                        <img
                            alt="Home"
                            src="/homeMenu.png"
                            width="24"
                            height="24"
                            decoding="async" data-nimg="future"
                            className="pointer-events-none h-auto" loading="lazy"
                            style={{color: 'transparent'}}
                        />
                        <span
                            className="pointer-events-none ml-[8px] text-[12px] font-[600] uppercase leading-[20px] text-[#C1BABA] sm:text-[18px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]"
                        >
                            Home
                        </span>
                    </a>
                    {
                        Menus.map((item:any, index) => {
                            return <a
                                key={index}
                                className="z-1 flex h-[40px] items-center whitespace-nowrap px-[12px] uppercase sm:py-[38px] sm:justify-center sm:whitespace-nowrap md:py-0 md:justify-start xl:h-[48px] xl:px-[16px] border-b border-grey"
                            >
                                <img
                                    alt="Home"
                                    src={item.imgSrc}
                                    width="24"
                                    height="24"
                                    decoding="async" data-nimg="future"
                                    className="pointer-events-none h-auto" loading="lazy"
                                    style={{color: 'transparent'}}
                                />
                                <span
                                    className="pointer-events-none ml-[8px] text-[12px] font-[600] uppercase leading-[20px] text-[#C1BABA] sm:text-[18px] md:text-[12px] xl:text-[14px] 2xl:text-[18px]"
                                >
                            {item.text}
                        </span>
                                {item?.otherImg && <img
                                    alt="Go Live!"
                                    src={item?.otherImg}
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    data-nimg="future"
                                    className="pointer-events-none h-auto w-[16px] xl:w-[24px]"
                                    loading="lazy"
                                    style={{color: 'transparent'}}
                                />}
                            </a>
                        })
                    }

                    <a type="button" className="btnSmall hamburger mt-[48px] rounded uppercase">
                        Log In
                    </a>

                    <a
                        type="button"
                        className="btnSmall btnBgPurple hamburger mt-4 rounded uppercase sm:mb-[40px] md:mt-4 md:mb-0"
                        onClick={onSign}
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    </>
};

export default MobileMenus;
