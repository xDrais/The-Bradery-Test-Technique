// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to
import axios from 'axios';


async function getProductData(id) {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      
      const quantity = response?.data?.product?.[0].price;
      
      //console.log(quantity);
  
      if (quantity === undefined) {
        return 0;
      }
  
      return quantity;
    } catch (error) {

      //  console.error(error);
      
      return 0;
    }
  }
  

export {  getProductData };