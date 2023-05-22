module.exports = {
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        'src/*.(js|ts|jsx|tsx)',
        'src/**/*.(js|ts|jsx|tsx)',
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        'types.ts',
        'custom.d.ts',
    ],
    transform: {
        '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
    },
    reporters: ['default'],
    transformIgnorePatterns: [],
    setupFilesAfterEnv: [
        './test.setup.ts',
    ],
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/__mocks__/svg.js',
    },
    clearMocks: true,
};
