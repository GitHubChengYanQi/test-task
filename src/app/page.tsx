'use client'

import Sign from './page/Sign/index'
import {useState} from "react";


const Home = () => {

    const [visible, setVisible] = useState(true)

    return <div className='flex w-full max-w-[100vw] flex-1 flex-col sm:mt-[-96px] lg:mt-0'>
        <div className='content page-container sm:pt-[100px] lg:pt-0'>
            <div
                className='flex items-start justify-around pt-[55px] sm:pt-[0px] pb-[125px] sm:pb-[114px] md:pb-[125px] lg:pt-[20px] xl:pt-[40px] xl:pb-[234px] 2xl:pt-[60px] 2xl:pb-[160px]'
            >
                <div className="relative w-[55%] flex-none sm:hidden md:block">
                    <button type="button" className="flex items-center 2xl:absolute">
                        <img alt="arrow left"
                             src="/arrow.png"
                             width="77"
                             height="8"
                             decoding="async"
                             data-nimg="future"
                             className=""
                             loading="lazy"
                        />
                        <span
                            className="ml-[24px] text-[16px] font-[600] leading-[28px] text-[#C1BABA] xl:text-[24px]">Back</span>
                    </button>
                    <div className="w-full xl:mt-14 2xl:mt-4">
                        <div className='relative inline-block'>
                            <img
                                src="/home.png"
                                alt="Tia Torres"
                                width='752'
                                height='708'
                            />

                            <img
                                className='absolute right-[-200px] bottom-0'
                                src="/frame.png"
                                alt="Tia Torres"
                                width='593'
                                height='180'
                            />
                        </div>
                    </div>
                </div>
                <Sign/>
            </div>
        </div>

        {visible && <div
            className="fixed bottom-0 left-0 h-[294px] w-screen bg-[#141518] bg-opacity-80 backdrop-blur-[10px] z-modal">
            <div className="h-full w-full pl-[5%] pr-[6%] xl:pl-[13%] xl:pr-[14%] 2xl:pl-[23%] 2xl:pr-[24%]">
                <div className="flex h-full w-full flex-col justify-center">
                    <div className="flex justify-center">
                        <img className="h-[68px] w-[68px]" src="/surface.png" alt="cookie bar icon"/>
                        <div className="flex flex-col pl-[72px]"><h1
                            className="text-[22px] font-semibold text-white">Our website uses cookies</h1><p
                            className="mt-3 text-lg font-medium text-white">Our website use cookies. By continuing, we
                            assume your permission to deploy cookies as detailed in our
                            <a className="text-[#3B82F6] underline">Privacy Policy</a>.</p></div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="mr-10 flex min-w-[127px] items-center justify-center bg-transparent text-[rgba(239,239,239,1)] text-lightGrey underline hover:text-[#C1BABA]"
                                onClick={() => {
                                    setVisible(false)
                                }}
                            >
                                Decline cookies
                            </button>
                            <button
                                type="button"
                                className="btn-normal signBtnBg h-[52px] w-[211px] rounded !text-base uppercase"
                                onClick={() => {
                                    setVisible(false)
                                }}
                            >
                                Accept Cookies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </div>
}

export default Home
