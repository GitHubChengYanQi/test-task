import React from "react";

type TopLayoutProps = {
    label: string,
    placeholder: string,
    value: string | null,
    onChange: Function,
    suffix?: React.ReactNode,
    type?: string
}

const SignInput: React.FC<TopLayoutProps> = (
    {
        onChange,
        value,
        placeholder,
        label,
        suffix,
        type
    }) => {


    return <>
        <div className="mt-[18px] 2xl:mt-[32px]">
            <div className="text-[12px] font-[600] leading-[150%] text-white xl:text-[16px]">{label}</div>
            <div
                className="flex rounded-[12px] bg-[#FFFFFF] h-[38px] xl:h-[46px] 2xl:h-[62px] mt-[4px] xl:mt-[8px] 2xl:mt-[12px]">
                <input
                    type={type || 'text'}
                    value={value || ''}
                    className="h-full min-w-0 flex-auto border-none bg-transparent pl-[32px] pr-[8px] text-[14px] font-[400] leading-[130%] text-[#090C11] placeholder:text-[#C1BABA]"
                    placeholder={placeholder}
                    onChange={({target: {value}}) => onChange(value)}
                />
                {suffix}
            </div>
        </div>
    </>
};

export default SignInput;
