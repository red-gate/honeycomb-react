const ignores = [
    '/node_modules/',
    '/__tests__/helpers/',
    '__mocks__',
];

module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.+(js|jsx|ts|tsx)',
    ],
    coveragePathIgnorePatterns: [
        ...ignores,
    ],
    coverageReporters: [
        'html',
        'teamcity',
        'text',
        'text-summary',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'ts',
        'tsx',
    ],
    preset: 'ts-jest',
    roots: [
        '<rootDir>/src',
    ],
    setupFilesAfterEnv: [
        '<rootDir>/test/testSetup.ts',
    ],
    testPathIgnorePatterns: [
        ...ignores,
    ],
    testResultsProcessor: 'jest-teamcity-reporter',
    testURL: 'http://localhost',
};
