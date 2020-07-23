
declare module '*.svg';
declare module '*.png';
declare module '*.mp4';

interface Window {
  disableStr: string; // Key which indicates if Google Analytics is disabled (window & cookie)
  gaOptout: () => void; // Function to disable Google Analytics
  [key: string]: string | boolean;
}
