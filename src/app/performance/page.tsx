import Hero from '@/components/hero';
import img from 'public/performance.jpg';

export default function Performance() {
  return (
    <Hero
      title="We serve high performance applications"
      imgData={img}
      imgAlt="welding"
    />
  );
}
