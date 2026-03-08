import { useState } from 'react';
import { Bell, BellOff, RotateCcw, Download, Info } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import { clearAllData } from '../utils/db';
import { requestNotificationPermission, scheduleNotification } from '../utils/notifications';

export default function SettingsPage() {
  const { state, updateSettings } = useAppContext();
  const { settings } = state;
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleNotificationToggle = async () => {
    if (!settings.notificationsEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        updateSettings({ notificationsEnabled: true });
        scheduleNotification(settings.notificationTime);
      }
    } else {
      updateSettings({ notificationsEnabled: false });
    }
  };

  const handleReset = async () => {
    await clearAllData();
    setShowResetConfirm(false);
    window.location.reload();
  };

  const handleExport = async () => {
    const { getAllCardProgress, getAllDailySessions, getSettings } = await import('../utils/db');
    const data = {
      settings: await getSettings(),
      progress: await getAllCardProgress(),
      sessions: await getAllDailySessions(),
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deutschmeister-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold text-text-primary">Settings</h1>

      {/* Daily Goal */}
      <div className="bg-surface rounded-2xl p-5 shadow-sm border border-border-light">
        <p className="font-semibold text-text-primary mb-3">Daily Goal</p>
        <div className="grid grid-cols-4 gap-2">
          {[50, 75, 100, 150].map((goal) => (
            <button
              key={goal}
              onClick={() => updateSettings({ dailyGoal: goal })}
              className={`py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                settings.dailyGoal === goal
                  ? 'bg-primary text-white'
                  : 'bg-muted text-text-primary hover:bg-muted-hover'
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
        <p className="text-xs text-text-secondary mt-2">Words per day</p>
      </div>

      {/* Notifications */}
      <div className="bg-surface rounded-2xl p-5 shadow-sm border border-border-light">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-text-primary">Daily Reminder</p>
          <button
            onClick={handleNotificationToggle}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              settings.notificationsEnabled
                ? 'bg-primary text-white'
                : 'bg-muted text-text-secondary hover:bg-muted-hover'
            }`}
          >
            {settings.notificationsEnabled ? <Bell size={16} /> : <BellOff size={16} />}
            {settings.notificationsEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
        {settings.notificationsEnabled && (
          <div className="flex items-center gap-2">
            <label className="text-sm text-text-secondary">Time:</label>
            <input
              type="time"
              value={settings.notificationTime}
              onChange={(e) => {
                updateSettings({ notificationTime: e.target.value });
                scheduleNotification(e.target.value);
              }}
              className="border border-border rounded-lg px-3 py-1.5 text-sm"
            />
          </div>
        )}
      </div>

      {/* Card Direction */}
      <div className="bg-surface rounded-2xl p-5 shadow-sm border border-border-light">
        <p className="font-semibold text-text-primary mb-3">Card Direction</p>
        <div className="space-y-2">
          {[
            { value: 'mixed' as const, label: 'Mixed (recommended)', desc: 'Randomly alternate both directions' },
            { value: 'de-en' as const, label: 'German → English', desc: 'See German, guess English' },
            { value: 'en-de' as const, label: 'English → German', desc: 'See English, guess German' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateSettings({ cardDirection: opt.value })}
              className={`w-full text-left p-3 rounded-xl transition-colors ${
                settings.cardDirection === opt.value
                  ? 'bg-primary/10 border-primary/30 border'
                  : 'bg-muted border border-transparent hover:bg-muted'
              }`}
            >
              <p className={`text-sm font-medium ${settings.cardDirection === opt.value ? 'text-primary' : 'text-text-primary'}`}>
                {opt.label}
              </p>
              <p className="text-xs text-text-secondary">{opt.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Data */}
      <div className="bg-surface rounded-2xl p-5 shadow-sm border border-border-light space-y-3">
        <p className="font-semibold text-text-primary">Data</p>
        <button
          onClick={handleExport}
          className="w-full flex items-center gap-2 py-2.5 px-4 bg-muted rounded-xl text-sm font-medium text-text-primary hover:bg-muted transition-colors"
        >
          <Download size={16} />
          Export Progress
        </button>
        <button
          onClick={() => setShowResetConfirm(true)}
          className="w-full flex items-center gap-2 py-2.5 px-4 bg-red-50 rounded-xl text-sm font-medium text-error hover:bg-red-100 transition-colors"
        >
          <RotateCcw size={16} />
          Reset All Progress
        </button>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-surface rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-bold text-text-primary mb-2">Reset Progress?</h3>
            <p className="text-sm text-text-secondary mb-6">
              This will delete all your learning progress, streaks, and settings. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 bg-muted rounded-xl text-sm font-semibold text-text-primary"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 bg-error text-white rounded-xl text-sm font-semibold"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* App Info */}
      <div className="flex items-center justify-center gap-1 text-xs text-text-secondary py-4">
        <Info size={12} />
        <span>DeutschMeister v1.0 — German A1 Learning App</span>
      </div>
    </div>
  );
}
