import React from "react";
import './index.css'

const Sign = () => {


    return <>
        <div className="mt-[12px] w-[30%] flex-none sm:w-full md:w-[30%] 2xl:mt-0 sm:px-[32px]">
            <h1 className="text-[24px] font-[700] uppercase leading-[130%] text-white xl:text-[36px] 2xl:text-[48px]">
                Sign up
            </h1>
            <div
                className="mt-2 flex w-full flex-col text-[14px] font-[500] leading-[150%] text-white lg:flex-row xl:text-[18px] sm:flex-row md:flex-col">
                <span className="mr-2 xl:mr-4 xl:block">Already have an account?</span>
                <span className="font-bold underline">Log in here</span>
            </div>
            <button
                type="button"
                className="signBtnBgPurple mt-10 flex w-full items-center justify-center rounded-[12px] py-[12px]"
            >
                <img
                    src="/assets.png"
                    width="30"
                    height="30"
                    data-nimg="future"
                    className=""
                    loading="lazy"
                    alt='assets'
                />
                <span
                    className="ml-[12px] text-[14px] font-[600] uppercase text-white">Sign up with Patreon</span>
            </button>
            <div className="div-or-line mt-6 h-[1px] xl:mt-9">
                <div className="h-[1px] w-full bg-[#C1BABA]"></div>
                <span className="font-montserrat text-base text-[#C1BABA] mx-1">or</span>
                <div className="h-[1px] w-full bg-[#C1BABA]"></div>
            </div>
            <div className="mt-[18px] 2xl:mt-[32px]">
                <div className="text-[12px] font-[600] leading-[150%] text-white xl:text-[16px]">Email</div>
                <div
                    className="flex overflow-hidden rounded-[12px] bg-[#FFFFFF] h-[38px] xl:h-[46px] 2xl:h-[62px] mt-[4px] xl:mt-[8px] 2xl:mt-[12px]">
                    <input
                        className="h-full min-w-0 flex-auto border-none bg-transparent pl-[32px] pr-[8px] text-[14px] font-[400] leading-[130%] text-[#090C11] placeholder:text-[#C1BABA]"
                        type="text" placeholder="Enter Email" value=""/>
                    <div
                        className="__react_component_tooltip t1572c47b-5fbf-4599-849c-bfae2b42fa6b place-top type-dark"
                        id="t1572c47b-5fbf-4599-849c-bfae2b42fa6b" data-id="tooltip">
                    </div>
                </div>
            </div>
            <div className="mt-[18px] 2xl:mt-[32px]">
                <div className="text-[12px] font-[600] leading-[150%] text-white xl:text-[16px]">Create Password</div>
                <div
                    className="flex overflow-hidden rounded-[12px] bg-[#FFFFFF] h-[38px] xl:h-[46px] 2xl:h-[62px] mt-[4px] xl:mt-[8px] 2xl:mt-[12px]">
                    <input
                        className="h-full min-w-0 flex-auto border-none bg-transparent pl-[32px] pr-[8px] text-[14px] font-[400] leading-[130%] text-[#090C11] placeholder:text-[#C1BABA]"
                        type="password" placeholder="Enter Password" value=""/>
                    <div className="flex items-center pr-2">
                        <img width="24" height="24" src="/eye-off.png" alt="eye"/></div>
                    <div
                        className="__react_component_tooltip t7522b39c-63b0-4cbc-80ee-b7262179290d place-top type-dark"
                        id="t7522b39c-63b0-4cbc-80ee-b7262179290d" data-id="tooltip">
                    </div>
                </div>
            </div>
            <div className="mt-[18px] 2xl:mt-[32px]">
                <div className="text-[12px] font-[600] leading-[150%] text-white xl:text-[16px]">Confirm Password</div>
                <div
                    className="flex overflow-hidden rounded-[12px] bg-[#FFFFFF] h-[38px] xl:h-[46px] 2xl:h-[62px] mt-[4px] xl:mt-[8px] 2xl:mt-[12px]">
                    <input
                        className="h-full min-w-0 flex-auto border-none bg-transparent pl-[32px] pr-[8px] text-[14px] font-[400] leading-[130%] text-[#090C11] placeholder:text-[#C1BABA]"
                        type="password" placeholder="Confirm password" value=""/>
                    <div className="flex items-center pr-2">
                        <img width="24" height="24" src="/eye-off.png" alt="eye"/></div>
                    <div
                        className="__react_component_tooltip te925dd2d-cf1e-4797-9c20-378727a16319 place-top type-dark"
                        id="te925dd2d-cf1e-4797-9c20-378727a16319" data-id="tooltip">
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-start">
                <input type='checkbox' className='w-[20px] h-[20px]'/>
                <p className="ml-4 text-sm font-medium leading-[150%] text-white">
                    By clicking Sign Up, you are indicating that you have read and agree to the
                    <a className="text-[#3B82F6] underline px-1">Terms of Use</a> and
                    <a className="text-[#3B82F6] underline px-1">Privacy Policy</a> .
                </p>
            </div>
            <button type="button"
                    className="btn-normal mt-[32px] w-full rounded uppercase bg-[#C1BABA] md:h-[44px] xl:h-[48px] lg:h-[48px] sm:h-[48px]">
                Sign Up
            </button>
            <div className="div-or-line mt-6 h-[1px] xl:mt-9">
                <div className="h-[1px] w-full bg-[#C1BABA]"></div>
                <span className="font-montserrat text-base text-[#C1BABA] mx-1">or</span>
                <div className="h-[1px] w-full bg-[#C1BABA]"></div>
            </div>
            <div className="mt-[24px] flex w-full flex-col">
                <button
                    type="button"
                    className="mt-[16px] flex items-center justify-center rounded-[12px] bg-white py-[12px]"
                >
                    <img
                        alt="google icon"
                        src="/google.png" width="30" height="30"
                        decoding="async" data-nimg="future" className="" loading="lazy"/><span
                    className="ml-[12px] text-[14px] font-[600] uppercase text-mainBlack">Sign up with Google</span>
                </button>
                <button className="mt-[16px] flex items-center justify-center rounded-[12px] bg-[#3F7ABE] py-[12px]">
                    <img
                        alt="facebook"
                        src="/facebook.png" width="30" height="30" decoding="async"
                        data-nimg="future" className="" loading="lazy"/><span
                    className="ml-[12px] text-[14px] font-[600] uppercase text-white">Sign up with Facebook</span>
                </button>
            </div>
        </div>
    </>
};

export default Sign