import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Layout() {
  return (
    <div className="min-h-full flex flex-col">
      <main className="flex-1 max-w-lg mx-auto w-full pb-20 px-4">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
