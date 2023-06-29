import React from "react";
import './index.css'


const TopLayout = () => {

    const menus = [
        {text: 'Explore', imgSrc: '/tv.png'},
        {text: 'Go Live!', imgSrc: '/microphone.png'},
        {text: 'Blog', imgSrc: '/music.png'},
        {text: 'Pricing', imgSrc: '/announce.png'},
        {text: 'About us', imgSrc: '/coins.png'},
    ]

    return <div className='top-0 z-header w-full sm:sticky md:absolute'>
        <div
            className='relative flex lg:h-[100px] items-center justify-between sm:px-[32px] sm:pt-[14px] sm:pb-[14px] bg-[#050000] md:px-5 md:pt-0 xl:h-[110px] md:h-[76px] xl:px-[80px]'
        >

            <div className='flex items-center justify-center self-center'>
                <img
                    alt="logo"
                    src="/logo.png"
                    className="xl:h-[92px] xl:w-[99px] lg:h-[76px] lg:w-[82px] md:h-[56px] md:w-[60px] sm:h-[68px] sm:w-[73px]"
                    loading="lazy"
                    style={{color: 'transparent'}}
                />
            </div>

            <div className="header-middle-menu max-w-[956px] items-center justify-around sm:hidden md:flex">
                {
                    menus.map((item, index) => {
                        return <div
                            key={index}
                            className="z-1 flex h-[40px] items-center whitespace-nowrap px-[12px] uppercase sm:py-[38px] sm:justify-center sm:whitespace-nowrap md:py-0 md:justify-start xl:h-[48px] xl:px-[16px]"
                        >
                            <img alt="Go Live!"
                                 src={item.imgSrc}
                                 width="24"
                                 height="24"
                                 decoding="async"
                                 data-nimg="future"
                                 className="pointer-events-none h-auto w-[16px] xl:w-[24px]"
                                 loading="lazy"
                                 style={{color: 'transparent'}}
                            />
                            <span
                                className="pointer-events-none ml-[8px] text-[12px] font-[600] uppercase leading-[20px] text-[#C1BABA] sm:text-[18px] md:text-[12px] xl:text-[14px]">
                                {item.text}
                            </span>
                        </div>
                    })
                }

            </div>

            <div className="header-right-menu flex items-center justify-center">
                <button
                    className='btnSmall md:w-[84px] md:h-[36px] rounded sm:hidden md:block xl:w-[149px] xl:h-[52px] lg:w-[149px] lg:h-[52px]'
                >LOG IN
                </button>
                <button
                    className='btnSmall btnBgPurple md:w-[84px] md:h-[36px] rounded sm:hidden md:block xl:w-[149px] xl:h-[52px] lg:w-[149px] lg:h-[52px]'
                >
                    SIGN UP
                </button>
                <div className='w-[64px] rounded sm:hidden md:block xl:w-[84px] text-center'>
                    <img src='/help.png' width="24" height="24" className='inline-block'/>
                </div>

                <button
                    className="flex py-2 pl-2 question-support sm:!mr-0 sm:pr-6 md:hidden">
                    <img src='/help.png' width="24" height="24" className='inline-block'/>
                </button>
                <button className="flex py-2 pl-2 hamburger md:hidden">
                    <img src='/menu.png' width="24" height="24" className='inline-block'/>
                </button>
            </div>
        </div>
    </div>
};

export default TopLayout