export function getLocalStorageValue(key: string): string | null {
  const res = localStorage.getItem(key);
  return res ? JSON.parse(res) : null;
}

export function setLocalStorageValue(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageValue(key: string) {
  localStorage.removeItem(key);
}
