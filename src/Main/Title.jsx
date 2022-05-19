import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import './font.css';

export const Title = ({ titleText, titleColor }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const text = titleText.split(' ').map((t) => ` ${t} `)

  return (
    <h1
      style={{
        fontFamily: 'Proxima Nova',
        fontSize: 130,
        textAlign: 'center',
        position: 'absolute',
        bottom: 300,
        left: -15,
        width: '100%',
        color: titleColor
      }}
    >
      {text.map((t, i) => {
        return(
          <span
            key={t}
            style={{
              display: 'inline-block',
              marginLeft: 10,
              marginRight: 10,
              transform: `scale(${spring({
                fps: videoConfig.fps,
                frame: frame - i * 5,
                config: {
                  damping: 100,
                  stifness: 200,
                  mass: 0.5,
                }
              })})`
            }}
          >
            {t}
          </span>
        )
      })}
    </h1>
  );
};