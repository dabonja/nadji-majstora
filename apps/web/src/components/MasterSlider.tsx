import React from 'react';
import Slider from 'react-slick';
import MasterCard from './MasterCard';
import { masters } from '../services/mockMasters';
import { HStack } from '@chakra-ui/react';

export default function MasterSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
<HStack>
      {masters.map((m) => (
        <div key={m.id} flex-direction="row" align-items="center" justify-content="center">
          <MasterCard {...m} />
        </div>
      ))}
</HStack>
  );
}