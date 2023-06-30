import React, {useState} from "react";
import './index.css'
import SignInput from "@/components/SignInput";
import {gql, useMutation} from '@apollo/client';
import {notification, Popover} from "antd";

const RequestSign = gql`mutation {
  signup(data: {
    email: "asdf@asdf.com",
    password: "asdf",
    fullname: "test user"
  })
}`

const Sign = () => {

    const [api, contextHolder] = notification.useNotification();

    const [requestSign, {loading}] = useMutation(RequestSign, {
        onCompleted: () => {
            api.success({message: '注册成功！'})
        },
        onError: (res) => {
            const errors = res.graphQLErrors[0]?.extensions?.response?.message || []
            if (typeof errors === 'string'){
                api.error({message: errors})
            }else {
                errors.forEach(error => {
                    api.error({message: error})
                })
            }
        }
    });



    const [formData, setFormData] = useState({email: null, password: null, confirmPassword: null})

    const [checkbox, setCheckbox] = useState(false)

    const [visiblePassword, setVisiblePassword] = useState(false)
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false)

    return <>
        {contextHolder}
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

            <SignInput
                label='Email'
                placeholder='Enter Email'
                value={formData.email}
                onChange={(value) => {
                    setFormData({...formData, email: value})
                }}
            />

            <SignInput
                type={visiblePassword ? 'text' : 'password'}
                label='Create Password'
                placeholder='Enter Password'
                value={formData.password}
                onChange={(value) => {
                    setFormData({...formData, password: value})
                }}
                suffix={<>
                    <div className="flex items-center pr-2" onClick={() => {
                        setVisiblePassword(!visiblePassword)
                    }}>
                        <img width="24" height="24" src={!visiblePassword ? '/eye-on.svg' : '/eye-off.png'} alt="eye"/>
                    </div>
                    {formData.password &&  <Popover content={<div>
                        <div> *Recommended use of over 8 characters, including at least</div>
                        <div>· 1 uppercase character</div>
                        <div>· 1 special character</div>
                        <div>· 1 number</div>
                    </div>} trigger="hover">
                        <div className="flex items-center pr-2 relative">
                            <img width="20" height="20" src='/tip.svg' alt="tip"/>
                        </div>
                    </Popover>}
                </>}
            />

            <SignInput
                type={visibleConfirmPassword ? 'text' : 'password'}
                label='Confirm Password'
                placeholder='Confirm password'
                value={formData.confirmPassword}
                onChange={(value) => {
                    setFormData({...formData, confirmPassword: value})
                }}
                suffix={<div className="flex items-center pr-2" onClick={() => {
                    setVisibleConfirmPassword(!visibleConfirmPassword)
                }}>
                    <img
                        width="24"
                        height="24"
                        src={!visibleConfirmPassword ? '/eye-on.svg' : '/eye-off.png'}
                        alt="eye"
                    />
                </div>}
            />

            <div className="mt-6 flex items-start">
                <input type='checkbox' className='w-[20px] h-[20px]' onClick={() => setCheckbox(!checkbox)}/>
                <p className="ml-4 text-sm font-medium leading-[150%] text-white">
                    By clicking Sign Up, you are indicating that you have read and agree to the
                    <a className="text-[#3B82F6] underline px-1">Terms of Use</a> and
                    <a className="text-[#3B82F6] underline px-1">Privacy Policy</a> .
                </p>
            </div>
            <button
                type="button"
                disabled={loading || !checkbox}
                className={`${checkbox ? 'signBtnBgPurple' : ''} btn-normal mt-[32px] w-full rounded uppercase bg-[#C1BABA] md:h-[44px] xl:h-[48px] lg:h-[48px] sm:h-[48px]`}
                onClick={() => {
                    if (formData.password !== formData.confirmPassword) {
                        api.warning({message:'Password doesn\'t meet requirements. Password need to have 1 uppercase, over 8 characters, special letter, number'})
                        return
                    }
                    requestSign({
                        mutation: gql`mutation {signup(data: {email: "${formData.email}",password: "${formData.password}",fullname: "cyqTest"})}`
                    })
                }}
            >
                {loading ? 'Loading...' : 'Sign Up'}
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
