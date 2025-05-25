//pick some of the properties of the objects that are passed in

export function only<T, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Pick<T, K> {
  return Object.fromEntries(keys.map((key) => [key, obj[key]])) as Pick<T, K>;
}

export function onlyMany<T, K extends keyof T>(
  arr: T[],
  keys: readonly K[]
): Pick<T, K>[] {
  return arr.map(
    (item) =>
      Object.fromEntries(keys.map((key) => [key, item[key]])) as Pick<T, K>
  );
}
