import * as faceapi from 'face-api.js';
import * as util from 'util';
import * as canvas from 'canvas';
import { join } from 'path';
import { glob } from 'glob';

export async function detect(
	folder: string,
	options: faceapi.SsdMobilenetv1Options
) {
	const a = glob(folder, (err, matches) => {
		if (err) throw err;

		matches.forEach(async (match) => {
			const img = await canvas.loadImage(match);
			const detections = await faceapi.detectAllFaces(
				(img as unknown) as faceapi.TNetInput,
				options
			);
			console.log(util.inspect(detections[0]));
		});
	});
}
