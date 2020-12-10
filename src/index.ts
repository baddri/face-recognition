import * as faceapi from 'face-api.js';
import * as util from 'util';
import { join } from 'path';
import * as canvas from 'canvas';
import { detect } from './detection';

import * as setup from './setup';
import './env';

async function run() {
	// run configuration
	await setup.init();

	// run image detection
	await detect(setup.inputDir, setup.options);
}

run();
