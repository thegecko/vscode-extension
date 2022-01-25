const path = require('path');

module.exports = {
    mode: 'production',
    target: 'webworker',
    entry: './src/browser/extension.ts',
    output: {
        filename: 'extension.js',
        path: path.resolve(__dirname, 'web'),
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
		vscode: 'commonjs vscode'
	},
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
