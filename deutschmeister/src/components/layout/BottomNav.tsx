import { useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, PenLine, Settings } from 'lucide-react';

const tabs = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/learn', label: 'Learn', icon: BookOpen },
  { path: '/grammar', label: 'Grammar', icon: PenLine },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border z-50">
      <div className="max-w-lg mx-auto flex">
        {tabs.map((tab) => {
          const active = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex-1 flex flex-col items-center py-2 pt-3 transition-colors ${
                active ? 'text-primary' : 'text-text-secondary hover:text-primary-light'
              }`}
            >
              <tab.icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span className={`text-xs mt-1 ${active ? 'font-semibold' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
