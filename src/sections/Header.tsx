import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import { Button } from '@/components/Button';

export const Header = () => {
  return (
  <header className="py-4 border-b border-white/15">
    <div className="container">
      <div className="flex justify-between">
        <div>
          <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
          <LogoIcon className="h-8 w-8" />
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <Button>Coming Soon</Button>
          <MenuIcon />
        </div>
      </div>
    </div>
  </header>
  );
};
