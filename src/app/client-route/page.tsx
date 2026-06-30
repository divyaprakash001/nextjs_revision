"use client";

import { useTheme } from '@/components/theme-provider';

// // after installing the server-only package, you can use server-only functions in client components, but they will throw an error if called on the client side. This is because server-only functions are meant to be executed on the server side only, and cannot be executed in the browser.
// // import { serverSideFunction } from "@/utils/server-utils";



// export default function page() {
//     // const resultInClient = serverSideFunction();
//     return (
//         <>
//             <div>client route</div>
//             {/* <h1>{resultInClient}</h1> */}
//         </>
//     )
// }


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './ImageSlider.css';

export default function page() {
  const theme = useTheme();

  const settings = {
    dots: true,
  };
  return (
    <>

  <h1 style={{color:theme.colors.primary}}>Client router page</h1>

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
