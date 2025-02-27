"use client"
import React from 'react'
import Image from "next/image";
import styles from './banner.module.css';
import { cn } from '@/lib/utils';
import NFTButton from '../NFT/NFTButton';

export default function CartoonOverlay() {
  return (
<div className="relative bg-black text-[#CBFC02] w-full h-screen flex flex-col items-center justify-center">
      {/* Parent div */}
      <div className="w-full h-full flex flex-col items-center gap-4">
        {/* Upper two images */}
        <div className="flex justify-between w-[70%] pt-4 mt-4">
          <div className='relative max-md:w-28 w-32 h-44 aspect-video'>
            <Image layout='fill' src="/Vector 29.png" alt="Arrow" />
          </div>
          <div className='relative  max-md:w-28 w-32 h-44 aspect-video'>
            <Image layout='fill' src="/Group 177013.png" alt="Surprised Face" />
          </div>
        </div>

        {/* Lower three images */}
        <div className="flex justify-between items-center w-[75%]">
          <div className='relative max-w-28 lg:mt-6 xl:w-96 lg:!w-[351px] md:w-[240px] aspect-square'>
            <Image layout='fill' src="/Group 1000006154.png" alt="Angry Face" />
          </div>
          <div className='relative max-md:w-28 mt-24 w-44 aspect-square'>
            <Image layout='fill' src="/Group 177025.png" alt="Sunglasses" />
          </div>
          <div className='relative max-md:w-28 md:w-52 lg:w-[227px] lg:h-[279px]'>
            <Image layout='fill' src="/Group 1000006158.jpeg" alt="Monkey Face" />
          </div>
        </div>
      </div>

      {/* Centered text */}
      <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 !text-center xl:!text-7xl lg:text-6xl md:text-4xl text-3xl !w-full text-white font-[500] tracking-widest">
        Let&apos;s hunt some <br />
        bounties
      </div>

      <div className="bg-primaryGreen absolute -bottom-12 max-sm:-bottom-16 w-full -rotate-[4.12deg] text-primaryBlack text-center py-2 font-bold text-lg uppercase border-t-4 border-b-4 border-dashed border-black z-50">
        <span className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl'>Bug bounties, meme bounties, tech bounties—free money</span>
      </div>
    </div>
  );
}