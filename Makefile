main:
	PORT=3000 ./bin/www

debug:
	PORT=3000 DEBUG=true ./bin/www

.PHONY: main debug