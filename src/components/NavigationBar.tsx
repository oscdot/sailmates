'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Spinner,
} from '@nextui-org/react';
import { Sailboat, SearchIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import UserProfileButton from './UserProfileButton';
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Link from 'next/link';

export const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Sailboat className="mr-1.5" />
        <p className="hidden font-bold text-inherit sm:block">
          <Link color="foreground" href="/">
            SailMates
          </Link>
        </p>
      </NavbarBrand>
      <NavbarContent justify="start">
        <NavbarContent className=" gap-4 sm:flex">
          <NavbarItem isActive={pathname == '/boats'}>
            <Link color="foreground" href="/boats">
              Boats
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname == '/listings'}>
            <Link color="foreground" href="/listings">
              Listings
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname == '/groups'}>
            <Link color="foreground" href="/groups">
              Groups
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[18rem] h-10 hidden sm:block',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <div>
          <ClerkLoading>
            <Spinner size="md" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserProfileButton />
          </ClerkLoaded>
        </div>
      </NavbarContent>
    </Navbar>
  );
};
export default NavigationBar;
