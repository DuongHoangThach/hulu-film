import {
  ArchiveBoxIcon,
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logoFilm from '../public/film-slate.webp';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={BoltIcon} />
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
        <HeaderItem title='COLLECTIONS' Icon={ArchiveBoxIcon} />
        <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className='object-container'
        src={logoFilm}
        alt='logo Image'
        width={100}
        height={100}
        priority
      />
    </header>
  );
}

export default Header;
