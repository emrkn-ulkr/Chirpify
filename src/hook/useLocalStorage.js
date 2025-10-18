import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {

            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {

            console.error(`LocalStorage'dan '${key}' okunurken hata:`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {

            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(`LocalStorage'a '${key}' yazılırken hata:`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}