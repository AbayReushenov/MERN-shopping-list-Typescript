export interface ConfigHeaders {
  headers: {
    [index: string]: string;
  };
}

export const configHeaders: ConfigHeaders = {
  headers: {
    'Content-type': 'application/json',
  },
};
