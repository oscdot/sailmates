'use client';

import { pb } from '@/lib/pb';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const LatestUsersAvatarList = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await pb.collection('users').getFullList({ batch: 1 }),
    refetchOnWindowFocus: true,
  });

  if (isLoading)
    return (
      <>
        <div className="h-8 w-8 transform animate-pulse rounded-full bg-foreground duration-1000"></div>
        <div className="h-8 w-8 transform animate-pulse rounded-full bg-foreground duration-1000"></div>
        <div className="h-8 w-8 transform animate-pulse rounded-full bg-foreground duration-1000"></div>
        <div className="h-8 w-8 transform animate-pulse rounded-full bg-foreground duration-1000"></div>
        <div className="h-8 w-8 transform animate-pulse rounded-full bg-foreground duration-1000"></div>
      </>
    );

  return (
    <>
      {users?.map((user) => (
        <div key={user.id} className="flex">
          <Image
            className="h-8 w-8 overflow-hidden rounded-full shadow-md"
            src={`https://backend.nudesafe.com/api/files/users/${user.id}/${user.avatar}?thumb=100x300`}
            width={150}
            height={150}
            alt={`${user.username}'s avatar`}
            priority
          />
        </div>
      ))}
    </>
  );
};

export default LatestUsersAvatarList;
