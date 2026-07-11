// import {serverSideFunction} from '@/utils/server-utils';


// export default function ServerRoutePage() {
//     const result = serverSideFunction();
//   return (
//     <div>
//       server route 
//       <h1>{result}</h1>
//     </div>
//   )
// }


// if i use Slider in server route from react-slick, it will throw error because react-slick is a client side library and cannot be used in server side components. So, we need to use it in client side components only.
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from '@/components/ImageSlider';
import { ThemeProvider } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';
// import './ImageSlider.css';

// here we can use ImageSlider besides of
// marking ImageSlider as client component,
// because ImageSlider is a client component and
//  can be used in server components by importing it not directly coding in server component.

export default function ServerRoutePage() {
  // client-only functions can be used in server components, 
  // but they will throw an error if called on the server side. This is because client-only functions are meant to be executed on the client side only, and cannot be executed on the server side.
  // const resultInClient = clientSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <>
    <ThemeProvider>
      {/* <p>{resultInClient}</p> */}
    <div className="image-slider-container">
      dis is server route page
      <ImageSlider/>
    </div>
    </ThemeProvider>
    </>
  );
}
