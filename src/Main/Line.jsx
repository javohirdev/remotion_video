import { interpolate, useCurrentFrame } from "remotion";

export const Line = ({ position = 'top' | 'bottom' | 'left' | 'right'}) => {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  const styles = {
    position: 'absolute',
    background: '#01FFFF',
    opacity
  }

  if(position === 'top' || position === 'bottom'){
    styles.width = "100%";
    styles.height = "20px";
    if(position === 'bottom'){
      styles.bottom = 0;
    }
  }

  if(position === 'left' || position === 'right'){
    styles.height = '100%';
    styles.width = '20px';
    if(position === 'right'){
      styles.right = 0;
    }
  }

  return (
    <div style={styles} />
  );
};