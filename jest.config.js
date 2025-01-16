const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
setupFilesAfterEnv.push('<rootDir>/jest-sa11y-setup.js');
const collectCoverageFrom = [];
collectCoverageFrom.push('./sfdx-source/salesforce-scheduling/main/default/lwc/**/*.{js,jsx}');

module.exports = {
    ...jestConfig,
    setupFilesAfterEnv,
    collectCoverageFrom: collectCoverageFrom,
    modulePathIgnorePatterns: ['<rootDir>/.localdevserver'],
    moduleNameMapper: {
        '\\.css$': '<rootDir>/test/jest-mocks/c/styleMock.js', // Mock all .css imports
        '^lightning/modal': '<rootDir>/test/jest-mocks/lightning/modal',
        '^lightning/navigation$': '<rootDir>/test/jest-mocks/lightning/navigation',
        '^lightning/modal$': '<rootDir>/test/jest-mocks/lightning/modal',
        '^lightning/uiRecordApi$': '<rootDir>/test/jest-mocks/lightning/uiRecordApi',
        '^lightning/platformShowToastEvent$': '<rootDir>/test/jest-mocks/lightning/platformShowToastEvent',
        '^c/pubsub$': '<rootDir>/test/jest-mocks/c/pubsub',
        '^omnistudio/pubsub$': '<rootDir>/test/jest-mocks/omnistudio/pubsub'
    }
};
