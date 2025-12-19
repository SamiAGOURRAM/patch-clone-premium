import Snowfall from 'react-snowfall';
import { useSeasonalSettings } from '@/hooks/useSanity';
import { useMemo } from 'react';

export const ChristmasEffects = () => {
  const { data: settings } = useSeasonalSettings();

  // Check if we're within the season dates
  const isWithinSeason = useMemo(() => {
    if (!settings) return false;
    
    const now = new Date();
    
    if (settings.seasonStartDate) {
      const start = new Date(settings.seasonStartDate);
      if (now < start) return false;
    }
    
    if (settings.seasonEndDate) {
      const end = new Date(settings.seasonEndDate);
      if (now > end) return false;
    }
    
    return true;
  }, [settings]);

  // Calculate speed based on setting
  const speedRange = useMemo(() => {
    switch (settings?.snowflakeSpeed) {
      case 'slow':
        return [0.5, 1.5] as [number, number];
      case 'fast':
        return [3, 6] as [number, number];
      default: // normal
        return [1, 3] as [number, number];
    }
  }, [settings?.snowflakeSpeed]);

  // Don't render if snowfall is disabled or outside season
  if (!settings?.snowfallEnabled || !isWithinSeason) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <Snowfall
        snowflakeCount={settings.snowflakeCount || 150}
        color={settings.snowflakeColor || '#ffffff'}
        speed={speedRange}
        wind={[-0.5, 1]}
        radius={[0.5, 2.5]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
    </div>
  );
};

export default ChristmasEffects;
