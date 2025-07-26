import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // Avoid using null to prevent runtime errors

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
        const newData = await response.json();
        console.log(newData);
        setData(newData.rates); // only store rates for simplicity
      } catch (error) {
        console.error("Failed to fetch currency info:", error);
      }
    };

    fetchCurrencyInfo(); // ✅ Call the function
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
