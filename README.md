# all-each

Utility to run promise parallel.

To install package:

```bash
npm install all-each
```

Usage

```javascript
import allEach from 'all-each';

allEach(
  [1, 2, 3]
  0,
  async (item, idx) => console.log(idx, item),
)
```

## Docs

- `limiter` - count of concurrency
- `arr` - list of items to iterate
- `callback` - async callback (item, idx) => Promise<void>;
- `getDelay` - fn with dynamic delaying execution of promises

## Deploy

To install dependencies:

```bash
npm install
```

To build:

```bash
npm build
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
