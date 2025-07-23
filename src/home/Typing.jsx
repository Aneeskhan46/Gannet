import { TypeAnimation } from 'react-type-animation';

function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        'Not just shoes. A legacy in leather.', 3000,
        'Real leather. Real confidence.', 3000,
        'Your first impression starts at your feet', 3000,
        'Fine leather never goes out of style', 3000,
       
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '28px', display: 'inline-block', color: 'yellow' }}
      repeat={Infinity}
    />
  );
}

export default TypingText;
