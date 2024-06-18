import pLimit from '@esm2cjs/p-limit';

const wait = (t: number) => new Promise((r) => setTimeout(r, t));

export async function allEach<Item extends any, Result extends any>(
  limiter: number | ReturnType<typeof pLimit>,
  arr: Item[],
  callback: (item: Item, idx: number) => Promise<Result>,
  getDelay?: (idx: number) => number,
): Promise<Result[]> {
  if (limiter === 0) {
    return Promise.all(arr.map(callback));
  }

  const limit = typeof limiter === 'number' ? pLimit(limiter) : limiter;

  return Promise.all(
    arr.map(async (item, idx) => limit(() =>
      getDelay ? wait(getDelay(idx)).then(() => callback(item, idx))
      : callback(item, idx)
    )),
  );
};

