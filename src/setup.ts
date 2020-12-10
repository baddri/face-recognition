import * as faceapi from 'face-api.js';
import { join } from 'path';

export async function init() {
	const faceDetectionNet = faceapi.nets.ssdMobilenetv1;
	await faceDetectionNet.loadFromDisk(join(__dirname, 'model'));
}

export const options = new faceapi.SsdMobilenetv1Options({
	minConfidence: 0.5,
	maxResults: 1,
});

export const inputDir = 'src/image/**/*.{jpg,jpeg}';
