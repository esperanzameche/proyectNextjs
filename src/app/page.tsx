import {Description} from '@/app/components/home/Description';
import {Hero} from '@/app/components/home/Hero';
import { MainProducts } from './components/home/MainProducts';

export default function Home() {
  
  return (
    <main>
      <Hero/>
      <Description/>
      <MainProducts/>
    </main>
  );
      
}
