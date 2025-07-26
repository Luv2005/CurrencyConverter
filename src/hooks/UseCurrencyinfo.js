import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
        const json = await response.json();
        setRates(json.rates);
     
      } catch (err) {
        console.error("Currency fetch failed:", err);
      }
    };
    fetchCurrencyInfo(); // 🚀 Make this call!
  }, [currency]);

  return rates;
}

export default useCurrencyInfo;

