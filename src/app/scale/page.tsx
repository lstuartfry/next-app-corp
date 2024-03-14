import Hero from '@/components/hero';
import img from 'public/scale.jpg';

export default function Scale() {
  return (
    <Hero
      title="Scale your app to infinity"
      imgData={img}
      imgAlt="steel factory"
    />
  );
}
