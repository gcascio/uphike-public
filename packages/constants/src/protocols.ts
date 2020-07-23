const fullProtocol = (protocol: string): string => (process.env.NODE_ENV === 'production'
  ? `${protocol}s://`
  : `${protocol}://`);

export const HTTP = fullProtocol('http');
export const WS = fullProtocol('ws');
