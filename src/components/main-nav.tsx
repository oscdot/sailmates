import { Sailboat, Smile } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

interface MainNavProps {}

const MainNav = ({}: MainNavProps) => {
  return (
    <div className="flex justify-between border-b-2 bg-background p-4 px-8">
      <div className="flex items-center">
        <div className="mr-4">
          <Smile size={32} />
        </div>
        <nav className="flex space-x-1">
          <Button
            asChild
            variant="link"
            size="sm"
            className="text-medium font-semibold"
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            asChild
            variant="link"
            size="sm"
            className="text-medium font-semibold"
          >
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};

export default MainNav;
