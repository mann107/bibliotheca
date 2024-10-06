import {Button} from '@/components/Button';
import stars from '@/assets/stars.png';

export const Hero = () => {
  return (
  <section className='h-[592px] flex items-center overflow-hidden relative' style={{
    backgroundImage: `url(${stars.src})`,
  }}>
    <div className='absolute h-64 w-64 bg-[#2B338C] rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(94,105,231)_37.7%,rgb(18,26,120))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(51,127,244)]'></div>
    <div className='absolute h-[344px] w-[344px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
        <div className='h-2 w-2 bg-white rounded-full'></div>
      </div>
    </div>
    <div className='absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></div>
    <div className='absolute h-[544px] w-[544px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    <div className="container relative mt-16">
      <h1 className='text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(138,147,242,.5))] text-transparent bg-clip-text text-center'>Biblio theca</h1>
      <p className="text-lg text-white/70 mt-5 text-center">
        an online library with a plethora of resources to help with <b>your</b> academic journey.
        </p>
        <div className='flex justify-center mt-7'>
        <Button>Coming Soon</Button>
        </div>
    </div>
  </section>

  );
};
