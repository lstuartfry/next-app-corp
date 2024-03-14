import Hero from '@/components/hero';
import img from 'public/reliability.jpg';

export default function Reliability() {
  return (
    <Hero
      title="Super high reliability hosting"
      imgData={img}
      imgAlt="welding"
    />
  );
}
