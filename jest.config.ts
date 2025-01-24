export default {
	preset: "ts-jest/presets/js-with-ts",
	clearMocks: true,
	collectCoverage: false,
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
	coverageDirectory: "coverage",
	coveragePathIgnorePatterns: [
		"/src/tests/",
		"/src/main.tsx",
		"/src/vite-env.d.ts",
	],
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./jest.setup.ts"],
	moduleNameMapper: {
		"\\.(css|scss|sass)$": "<rootDir>/src/tests/__mocks__/styleMock.ts",
		"\\.(svg|png|jpg|jpeg|gif|webp|ico|bmp|tiff)$":
			"<rootDir>/src/tests/__mocks__/fileMock.ts",
		"^@utils/(.*)$": "<rootDir>/src/utils/$1",
		"^@components/(.*)$": "<rootDir>/src/components/$1",
		"^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
		"^@constants/(.*)$": "<rootDir>/src/constants/$1",
		"^@pages/(.*)$": "<rootDir>/src/pages/$1",
		"^@assets/(.*)$": "<rootDir>/src/assets/$1",
		"^@services/(.*)$": "<rootDir>/src/services/$1",
	},
	rootDir: ".",
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: "tsconfig.app.json",
			},
		],
	},
}
