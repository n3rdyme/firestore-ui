/* eslint-disable no-plusplus */
/**
 * Iterate over an array using the given mapper function to resolve a list of promises.
 *
 * @param {Array} input - The array to be mapped.
 * @param {function:Promise} mapper - A function to be called on each array element.
 * @param {number} [concurrency=1] - Limits the number of Promises created.
 * @param {function} [progress] - A function to be called on each iteration with progress count.
 * @param {object} [cancellationRef] - A cancellation reference object.
 * @returns {Promise}
 */

export function promiseParallel<TArray, TResult>(
  input: TArray[],
  mapper: (item: TArray) => Promise<TResult>,
  concurrency = 1,
  progress: (progress: number, total: number) => void = () => {
    /* noop */
  },
  cancellationRef: { cancel: boolean } = { cancel: false }
): Promise<TResult[]> {
  const useConcurrency =
    typeof concurrency === "number" && concurrency >= 1 ? concurrency : 1;

  const results: TResult[] = Array.from({ length: input.length });
  let progressCounter = 0;
  let offset = 0;

  function doWork(): Promise<void> | undefined {
    // eslint-disable-next-line no-return-assign
    return offset >= input.length
      ? Promise.resolve()
      : Promise.resolve(offset++)
          .then((ix) => {
            console.log("input[ix]", { input, ix, data: input[ix] });
            return mapper(input[ix]).then((result) => {
              results[ix] = result;
            });
          })
          .then(() => {
            progress(++progressCounter, input.length);
          })
          .then(() => {
            if (!cancellationRef.cancel) {
              return doWork();
            }
            return undefined;
          });
  }

  return Promise.all(Array.from({ length: useConcurrency }, doWork)).then(
    () => {
      return results;
    }
  );
}
