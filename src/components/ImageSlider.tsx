"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Suspense } from 'react';
import { useTheme } from './theme-provider';

export default function page() {
  const theme = useTheme()
  const settings = {
    dots: true,
  };
  return (
    <>
    <h1 style={{
      background:theme.colors.primary
    }}>Checking if theme context provider is working</h1>
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
    </>
  );
}
