import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col px-14 pt-10">
      <h1 className="mb-4 text-6xl font-semibold text-gray-800">Home</h1>
      <p className="mb-8 text-xl text-gray-600">
        This is the Home page. It&apos;s a work in progress.
      </p>
    </div>
  );
}
