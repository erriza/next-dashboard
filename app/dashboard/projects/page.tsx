'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { UserCircleIcon } from '@heroicons/react/20/solid';

export default function Page() {
    const links = [
        { name: 'Sliding Windows', href: '/dashboard/projects/slidingwindows', icon: UserCircleIcon},
        {
          name: 'Rotatin Navigation',
          href: '/dashboard/projects/rotatingnavigation',
          icon: DocumentDuplicateIcon,
        },

      ];
    
      return (
        <>
        <h1>Some of my projects</h1>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </>
      );
}