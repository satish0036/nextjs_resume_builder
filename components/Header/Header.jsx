'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [auser, setAuser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuser(JSON.parse(storedUser));
    }
  }, [pathname]);

  const signOut = () => {
    localStorage.removeItem('user');
    setAuser(null); // Update state immediately
    router.push('/');
  };

  return (
    <div id="no-header" className='p-3 px-5 flex justify-between items-center shadow-md'>
      <Link href={"/"}>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
        />
      </Link>

      {auser ? (
        <div className='flex justify-center items-center gap-3'>
          <Link href={"/dashbord"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <Button className="ml-1" variant="outline" onClick={signOut}>Logout</Button>
        </div>
      ) : (
        <Link href={"/auth/signin"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
