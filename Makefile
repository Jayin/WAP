
TEST_TIMEOUT = 5000
MOCHA_REPORTER = spec

main:
	PORT=3000 ./bin/www

debug:
	PORT=3000 DEBUG=true ./bin/www

test:
	@./node_modules/.bin/mocha \
	--timeout $(TEST_TIMEOUT) \
	--reporter $(MOCHA_REPORTER) \
	--recursive \
	test/

.PHONY: main debug test