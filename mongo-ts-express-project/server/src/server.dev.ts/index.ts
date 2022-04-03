import morgan from 'morgan';

import { app } from '../server';
import { hello } from '../middleware/hello';
import { logger } from '../middleware/logger';
import { time } from '../middleware/time';

/**
 * Development logging middleware
 **/
export function devLoggingTools() {
    app.use(morgan('dev')); // GET /api/ver1/main 200 13.078 ms - 207
    app.use('/', hello);
    app.use(logger);
    app.use(time);
}
