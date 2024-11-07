import React from 'react'

const FeatureColumn = ({ text }) => (
    <div className="flex grow gap-5 text-2xl font-medium text-black max-md:mt-10">
      <div className="flex shrink-0 w-2 bg-orange-500 h-[108px]" />
      <div className="flex-auto my-auto w-[269px]">{text}</div>
    </div>
  );

const Main = () => {
    const featureTexts = [
        "We're support founders at any stage of their journey.",
        "We increase the chances of success rate for potential startups.",
        "We give startups a competitive edge in fundraising and acquisition."
      ];

  return (
    <>
       <header className="flex overflow-hidden flex-col justify-center items-center px-16 py-3.5 w-full font-black bg-orange-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 max-w-full">
        <h1 className="flex-auto my-auto text-2xl text-white">
          List your startup for free
        </h1>
        <button className="px-5 py-2 text-xl text-orange-500 whitespace-nowrap bg-white rounded-md max-md:pl-5">
          Apply
        </button>
      </div>
    </header>
    <nav className="flex overflow-hidden z-10 flex-wrap gap-5 justify-between px-20 py-8 w-full text-2xl bg-stone-100 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 text-black max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64c67d7d5979ae12a424f24af971dd9130de180e6bb6a7fe99a7ccd82dc8cd34?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0" alt="" className="object-contain shrink-0 aspect-square w-[75px]" />
        <div className="flex flex-auto gap-9 my-auto">
          <a href="#assets">Assets</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>
      </div>
      <button className="px-7 py-4 my-auto font-black text-white bg-orange-500 rounded-lg max-md:px-5">
        Mango VC
      </button>
    </nav>
    <section className="flex overflow-hidden z-10 flex-col pb-5 mt-0 w-full text-3xl bg-white max-md:max-w-full">
      <div className="flex relative flex-col justify-center items-center px-20 py-44 w-full min-h-[622px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/77a9acc386b4ed8adc85c4f50f84a4035fecd78a22634d92efbea4d0e9ad8323?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col items-center mb-0 max-w-full w-[719px] max-md:mb-2.5">
          <h2 className="self-stretch text-6xl font-bold text-center text-orange-500 leading-[75px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            Marketplace for Acquiring New Growth Opportunities
          </h2>
          <p className="mt-3.5 text-black max-md:max-w-full">
            Something founders and investors want.
          </p>
          <button className="px-9 py-3.5 mt-6 max-w-full font-black text-white bg-orange-500 rounded-xl  max-md:px-5">
            List your Asset
          </button>
        </div>
      </div>
    </section>
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 -mt-3 w-full bg-stone-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-6 max-w-full w-[708px] max-md:mb-2.5">
        <h2 className="text-6xl font-medium text-center text-orange-500 leading-[75px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Showcase your startup and get noticed by top VC's
        </h2>
        <button className="self-center px-6 py-3 max-w-full text-2xl font-black text-white bg-orange-500 rounded-lg mt-[640px] max-md:px-5 max-md:mt-10">
          List Now
        </button>
      </div>
    </section>
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-44 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-9 w-full max-w-[1132px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="self-center text-4xl font-medium text-center text-black max-md:max-w-full w-[900px]">
           <span> <span className="text-orange-500">We help founders</span> list their startups for
          <span className="text-orange-500"> investment or acquisition</span> </span>, and the results speak for themselves.
        </h2>
        <div className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {featureTexts.map((text, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <FeatureColumn text={text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <header className="flex overflow-hidden flex-col items-center px-20 pt-16 pb-32 w-full bg-stone-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <h1 className="self-center text-6xl font-medium text-black max-md:text-4xl">
        How it <span className="text-orange-500">works</span>?
      </h1>
    </header>
    <section className="flex overflow-hidden flex-col mt-12 w-full rounded-xl bg-red-600 bg-opacity-70 max-md:mt-10 max-md:max-w-full">
      <div className="pt-5 pr-5 rounded-md bg-black bg-opacity-20 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-16 w-full text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pl-20 text-6xl font-black max-md:pl-5 max-md:max-w-full max-md:text-4xl">
                <h2 className="self-start max-md:max-w-full max-md:text-4xl">
                  How it works?
                </h2>
                <img 
                  loading="lazy" 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79b1bdc381b196ac6ef5181b60a8f3b772698afea5d1aa57fc2e49d64474861?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0" 
                  alt="" 
                  className="object-contain self-end mt-8 max-w-full aspect-square w-[100px] max-md:mr-2.5" 
                />
              </div>
              <div className="flex gap-3 self-start py-2.5 pr-8 pl-4 mt-24 text-2xl font-semibold bg-black bg-opacity-40 max-md:pr-5 max-md:mt-10">
                <span className="grow my-auto">Watch on</span>
                <img 
                  loading="lazy" 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/71a73eefce614d3dd72a2803d73de45b877585b4ea198dba4037d129e3dac77c?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0" 
                  alt="" 
                  className="object-contain shrink-0 w-10 aspect-square" 
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 max-w-full h-[469px] w-[367px] max-md:mt-10" />
          </div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden px-16 pt-60 pb-44 w-full text-6xl font-medium text-center text-black bg-white max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
      <h2 className='self-center text-4xl font-medium text-center max-md:max-w-full  w-[900px]'>
        We <span className="text-black">prioritize</span> the{' '}
        <span className="text-orange-500">needs of founders</span> and{' '}
        <span className="text-black">respect</span> the{' '}
        <span className="text-orange-500">time of VC's</span>.
      </h2>
    </section>

    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-32 bg-stone-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="pr-1.5 pl-14 mb-0 ml-2.5 max-w-full bg-white rounded-2xl w-[1200px] max-md:pl-5 max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full">
              <h2 className="self-stretch text-6xl text-orange-500 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Your next big thing is waiting
              </h2>
              <p className="mt-3.5 text-xl text-orange-500 w-[365px]">
                Join the community and get exclusive access to our upcoming launches.
              </p>
              <div className="flex gap-4 mt-8 text-sm font-extrabold">
                <button className="px-4 py-3 text-white bg-orange-500 rounded-md">
                  Contact Us
                </button>
                <button className="flex gap-1.5 px-4 py-3 text-orange-500 bg-white rounded-md border-2 border-orange-500 border-solid">
                  <img 
                    loading="lazy" 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dd5f88206f8e7d86614fa3769731141b3b5ef79d182308315bac9e99e578511?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0" 
                    alt="" 
                    className="object-contain shrink-0 self-start w-4 aspect-square" 
                  />
                  <span className="basis-auto">Join Community</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a34bb74541c209c5ca4a6fb89c1c80dbfd2537108d3fe6b0c544c11eb0f72c4d?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0" 
              alt="Community illustration" 
              className="object-contain grow w-full rounded-3xl aspect-[1.4] max-md:mt-10 max-md:max-w-full" 
            />
          </div>
        </div>
      </div>
    </section>

    <footer className="flex overflow-hidden flex-wrap gap-5 justify-between items-start px-16 pt-32 pb-16 mt-2 w-full text-xl text-orange-500 bg-stone-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <p className="self-end mt-40 font-light leading-7 max-md:mt-10 max-md:max-w-full">
        We're India's first ever online marketplace offering users to buy and sell their digital assets.
      </p>
      <nav className="flex gap-10 self-start leading-6">
        <ul>
          <li>Mango Assets</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>For Sellers</li>
          <li>Get Access</li>
          <li>Mango VC</li>
        </ul>
      </nav>
    </footer>

        </>
  )
}

export default Main
