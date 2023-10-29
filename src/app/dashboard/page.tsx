import SignOutButton from '@/components/SignOutButton';
import { Button } from '@/components/ui/button';
import { pb } from '@/lib/pb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
