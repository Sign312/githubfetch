let nodeVersion = parseFloat(process.version.substring(1))

if (nodeVersion >= 7.6) {
	require('./app')
} else {
	let register = require('babel-core/register');

	register({
		presets: ['stage-3']
	});

	require('./app');
}