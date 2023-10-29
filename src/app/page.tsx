import LatestUsersAvatarList from '@/components/users/LatestUsersAvatarList';
import { pb } from '@/lib/pb';

const getUsers = async () => {
  try {
    const result = await pb.collection('users').getFullList({ batch: 1 });

    return result;
  } catch (error) {
    console.error(error);
  }
};

export default async function Home() {
  const users = await getUsers();
  return (
    <>
      <div className="flex items-center justify-center space-x-1">
        <LatestUsersAvatarList />
      </div>
    </>
  );
}
