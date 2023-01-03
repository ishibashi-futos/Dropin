export function generateImgPath(url) {
  return new URL(url, import.meta.url).href;
}