# Documentation Site

## Overview

The VictoryExamples documentation site is integrated into `http://formidable.com/open-source/victory` site. The `victory-docs` repo pulls in the docs components that live here and builds them into their own routes.

### Development

Run `builder run dev-docs` to start `webpack-dev-server` at port 3000.

### Deployment

1. Merge your PR into `master`.
2. Push to `master` on `victory-docs`, which will automatically trigger a fresh deployment on travis.
:tada: 
