build:
	npm --version
	node --version
	npm ci
	npm run lint
	npm run build
