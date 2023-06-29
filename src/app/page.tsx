import Sign from './page/Sign/index'

export default function Home() {
    return <div className='flex w-full max-w-[100vw] flex-1 flex-col'>
        <div className='content page-container sm:pt-0 md:pt-[80px]'>
            <div
                className='flex items-start justify-around pt-[55px] sm:pt-[0px] pb-[125px] sm:pb-[114px] md:pb-[125px] xl:pt-[40px] xl:pb-[234px] 2xl:pt-[60px] 2xl:pb-[160px]'>
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
                    <div className="aspect-[484/384] w-full xl:aspect-[810/451] xl:mt-14 2xl:mt-4">
                        <img
                            src="/home.png"
                            alt="Tia Torres"
                        />
                    </div>
                </div>
                <Sign/>
            </div>
        </div>
    </div>
}
