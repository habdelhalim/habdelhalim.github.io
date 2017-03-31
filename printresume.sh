#!/bin/bash
wkhtmltopdf --debug-javascript --viewport-size 1200x900 -d 300 -T 0 -B 0 -L 0 -R 0   'http://127.0.0.1:9000/' resume.pdf
