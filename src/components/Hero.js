import React from 'react';
// import { ArrowDownIcon } from '@heroicons/react/solid';

const Hero = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex justify-center items-center text-white relative" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxlbnRlcHJpc2V8ZW58MHx8fHwxNjI1MzQ0NzA4&ixlib=rb-1.2.1&q=80&w=1080')" }} 
      id="hero">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-center relative z-10">
        <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">Welcome to Lanvaus</h1>
        <p className="text-xl mt-4 animate__animated animate__fadeInUp animate__delay-1s">Your one-stop solution for all digital needs</p>
        <a href="#services" className="mt-10 inline-block">
          {/* <ArrowDownIcon className="h-10 w-10 text-white animate-bounce" /> */}
        </a>
      </div>
    </section>
  );
}

export default Hero;
