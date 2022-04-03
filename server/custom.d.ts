declare namespace Express {
  export interface Request {
     hellobody?: string
     user?: Record<string, string | number>
  }
}
