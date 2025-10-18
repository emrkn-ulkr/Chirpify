import { useState, useEffect } from 'react';
export function useLocalStorage(key, initialValue) {
    // 1. Durum (State) Tanımlama
    // LocalStorage'daki mevcut değeri okuyarak veya başlangıç değeri kullanarak state'i başlat.
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // LocalStorage'dan değeri oku
            const item = window.localStorage.getItem(key);
            // Değer varsa JSON'dan dönüştürerek döndür, yoksa başlangıç değerini kullan.
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // Hata durumunda (örneğin localStorage erişilemezse) başlangıç değerini kullan.
            console.error(`LocalStorage'dan '${key}' okunurken hata:`, error);
            return initialValue;
        }
    });

    // 2. LocalStorage'a Kayıt İşlemi (Değer değiştiğinde çalışır)
    // Değer (storedValue) değiştiği anda LocalStorage'ı günceller.
    useEffect(() => {
        try {
            // State'deki yeni değeri JSON string'e dönüştürerek LocalStorage'a kaydet.
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(`LocalStorage'a '${key}' yazılırken hata:`, error);
        }
    }, [key, storedValue]); // `key` ve `storedValue` değiştiğinde çalışır.

    return [storedValue, setStoredValue]; // Değer ve güncelleme fonksiyonunu döndür.
}