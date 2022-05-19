import { Composition } from 'remotion';
import { HelloWorld } from './Main/HelloWorld';

export const Demo = () => {
  return (
    <>
      <Composition
        component={HelloWorld}
        id="HelloWorld"
        fps={30}
        durationInFrames={150}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: 'Javohir  Group',
          titleColor: 'yellow'
        }}
      />
    </>
  );
};