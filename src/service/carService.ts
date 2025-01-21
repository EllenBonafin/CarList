export const fetchCars = async () => {
    try {
      const response = await fetch("https://driver-api-production.up.railway.app/protected");
      if (!response.ok) {
        throw new Error("Erro ao buscar os carros");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar os carros:", error);
      throw error;
    }
  };