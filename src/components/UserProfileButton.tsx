'use client';
import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  User,
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { PlusIcon } from 'lucide-react';
import { useAuth, useClerk, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export const UserProfileButton = () => {
  const { user } = useUser();

  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: 'p-0 border-small border-divider bg-background',
        arrow: 'bg-default-200',
      }}
    >
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          size="sm"
          src={user?.imageUrl}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={['profile']}
        className="p-3"
        itemClasses={{
          base: [
            'rounded-md',
            'text-default-500',
            'transition-opacity',
            'data-[hover=true]:text-foreground',
            'data-[hover=true]:bg-default-100',
            'dark:data-[hover=true]:bg-default-50',
            'data-[selectable=true]:focus:bg-default-50',
            'data-[pressed=true]:opacity-70',
            'data-[focus-visible=true]:ring-default-500',
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile-info"
            textValue="Info"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name={user?.fullName}
              description={`@${user?.username}`}
              classNames={{
                name: 'text-default-600',
                description: 'text-default-500 truncate w-32',
              }}
              avatarProps={{
                size: 'sm',
                src: user?.imageUrl,
              }}
            />
          </DropdownItem>
          <DropdownItem key="dashboard">Dashboard</DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem>
          <DropdownItem
            key="new_project"
            endContent={<PlusIcon className="text-large" />}
          >
            New Project
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem key="quick_search" shortcut="⌘K">
            Quick search
          </DropdownItem>
          <DropdownItem
            isReadOnly
            key="theme"
            className="cursor-default"
            textValue="Theme"
            endContent={<ThemeSwitcher />}
          >
            Theme
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => signOut(() => router.push('/'))}
          >
            Log out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
export default UserProfileButton;
