import {
  Audio,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence
} from 'remotion';
import intro from './assets/intro.mp3';
import { Line } from './Line';
import { Brand } from './Brand';
import { Title } from './Title';

export const HelloWorld = ({ titleText, titleColor }) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const totalOpacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 15],
    [1, 0]
  )

  return (
    <div className='main-container' style={{
      flex: 1,
      backgroundImage: 'linear-gradient(180deg, #000000, #01051CFF)'
    }}>
      <div style={{opacity: totalOpacity}}>
        <Sequence from={5} durationInFrames={Infinity}>
          <Line position="top" />
          <Audio src={intro} start={10} endAt={150} />
        </Sequence>
        <Sequence from={10} durationInFrames={Infinity}>
          <Line position="right" />
        </Sequence>
        <Sequence from={15} durationInFrames={Infinity}>
          <Line position="bottom" />
        </Sequence>
        <Sequence from={20} durationInFrames={Infinity}>
          <Line position="left" />
        </Sequence>
        <Sequence from={33} durationInFrames={Infinity}>
          <Brand />
        </Sequence>
        <Sequence from={40} durationInFrames={Infinity}>
          <Title titleText={titleText} titleColor={titleColor} />
        </Sequence>
      </div>
    </div>
  );
};