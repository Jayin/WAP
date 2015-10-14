TARGET_PATH = ./dist


main:
	gulp --minify

prototype:
	BUILD_TARGET=prototype gulp

serve:
	./node_modules/.bin/http-server ./dist/prototype -p 8000 --cors

.PHONY: main prototype serve
