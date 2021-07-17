export const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}
export function range(start, end) {
  if (start > end) {
    [end, start] = [start, end];
  }

  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index)
}
