export const takeData = async (props: any) => {
    try {
      const response = await fetch(`${props}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default takeData;