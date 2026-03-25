export function getFromLocalStorage<T>(name: string) {
  const localStorageitems = localStorage.getItem(name);
  const items: T = localStorageitems ? JSON.parse(localStorageitems) : null;
  return items;
}
export function setToLocalStorage<T>(name: string, data: T) {
  localStorage.setItem(name, JSON.stringify(data));
}
