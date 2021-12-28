export function find(array: any, predicate: (item: any) => boolean) {
  return array.find(predicate);
}

export function findIndex(array: any, predicate: (item: any) => any) {
  return array.findIndex(predicate);
}

// merge an array of objects into a single object
export function merge(array: any[], options?: any) {
  return array.reduce((result, item) => {
    Object.keys(item).forEach((key) => {
      result[key] = item[key];
    });
    return result;
  }, options);
}
