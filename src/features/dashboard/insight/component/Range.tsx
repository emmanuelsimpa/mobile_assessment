import {Box, Slider} from 'native-base';
import React from 'react';
import RangePick from '@/assets/svgs/range-pick.svg';
// import LinearGradient from 'react-native-linear-gradient';
// import ThumbImage from '@/assets/images/Tooltip.png';
// import TrackImage from '@/assets/images/progress-track.png';

export function Range() {
  return (
    <Box alignItems="center" w="100%" h={'50px'} overflow={'hidden'}>
      <Slider
        defaultValue={50}
        size="lg"
        h={'50px'}
        colorScheme="primary.500"
        w="60%"
        style={{transform: 'scale(1.5)'}}>
        <Slider.Track h={'full'} bg={'primary.700'}>
          <Slider.FilledTrack bg={'primary.700'} h={'100px'} />
        </Slider.Track>
        <Slider.Thumb borderWidth="0" bg="transparent">
          <RangePick />
        </Slider.Thumb>
      </Slider>
    </Box>
  );
}
