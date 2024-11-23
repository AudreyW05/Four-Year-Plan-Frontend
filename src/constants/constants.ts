import { Severity } from '@components/Notifier/Notifier';

export type LandingRoute = {
  route: string;
  routeText: string;
};

export const severity = {
  SUCCESS: 'success' as Severity,
  LOADING: 'loading' as Severity,
  ERROR: 'error' as Severity,
  WARNING: 'warning' as Severity,
  INFO: 'info' as Severity,
};
