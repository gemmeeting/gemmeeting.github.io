// Quantico Solutions
// here we define the system environment variables to be used by angular webpack builder. Angular will read these on build time.
var webpack = require('webpack');
var JavaScriptObfuscator = require ('webpack-obfuscator'); // tries to obfuscate final javascript code

module.exports = function (config, options) {

    if (config.mode === 'production') {
        config.plugins.push(new webpack.DefinePlugin({
            $MODD_ENV: {
                MODD_BACKEND_NODEJS_URL: JSON.stringify(process.env.MODD_BACKEND_NODEJS_URL),
                E360_BASE_URL: JSON.stringify(process.env.E360_BASE_URL)
            }
        }));

        // will substancially take much more time to compile!
        // keep it for the production build only

        config.plugins.push(new JavaScriptObfuscator({
            compact: true,
            controlFlowFlattening: false,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: false,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            debugProtectionInterval: 0,
            disableConsoleOutput: false,
            domainLock: [],
            domainLockRedirectUrl: 'about:blank',
            forceTransformStrings: [],
            identifierNamesCache: null,
            identifierNamesGenerator: 'hexadecimal',
            identifiersDictionary: [],
            identifiersPrefix: '',
            ignoreImports: false,
            inputFileName: '',
            log: false,
            numbersToExpressions: false,
            optionsPreset: 'default',
            renameGlobals: false,
            renameProperties: false, // dont switch to true or built angular app wont load!
            renamePropertiesMode: 'safe',
            reservedNames: [],
            reservedStrings: [],
            seed: 0,
            selfDefending: false,
            simplify: true,
            sourceMap: false,
            sourceMapBaseUrl: '',
            sourceMapFileName: '',
            sourceMapMode: 'separate',
            sourceMapSourcesMode: 'sources-content',
            splitStrings: false,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 0.5,
            stringArrayEncoding: [],
            stringArrayIndexesType: [
                'hexadecimal-number'
            ],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 1,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 2,
            stringArrayWrappersType: 'variable',
            stringArrayThreshold: 0.75,
            target: 'browser',
            transformObjectKeys: false,
            unicodeEscapeSequence: false
        }, []));
    };

    return config;
}