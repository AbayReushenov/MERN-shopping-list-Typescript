import morgan from 'morgan';

import { app } from '../server';
import { resLocalsHelloWrite as helloWrite } from '../middleware/resLocalsHelloWrite';
import { resLocalsHelloRead as helloRead } from '../middleware/resLocalsHelloRead';
import { always as alwaysMidleware } from '../middleware/always';
import { logger } from '../middleware/logger';
import { time } from '../middleware/time';

/**
 * Development logging middleware
 **/
export function devLoggingTools() {
    app.use(morgan('dev')); // GET /api/ver1/main 200 13.078 ms - 207
    app.use('/', helloWrite);
    app.use(logger);
    app.use(time);
    app.use('/', helloRead);
    app.use(alwaysMidleware);
}
