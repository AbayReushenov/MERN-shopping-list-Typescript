import { ConfigHeaders } from './ConfigHeaders';

export const tokenConfig = (token: string | null): ConfigHeaders => {
  const config: ConfigHeaders = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
