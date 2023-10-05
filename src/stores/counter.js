import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'ข้าวเหนียวมะม่วง ', img: 'https://i.pinimg.com/564x/74/27/c7/7427c78bdf161b0e1017f67619c50711.jpg', price: 120 },
    { name: ' ขนมชั้นดอกกุหลาบ ', img: 'https://static.thairath.co.th/media/Dtbezn3nNUxytg04N1L7iemmAmt2wbdC268Y4omq7Td52P.webp', price: 80 },
    { name: ' เต้าส่วน ', img: 'https://maokhao.com/wp-content/uploads/2022/11/da199.jpg', price: 60 },
    { name: 'กระท้อนลอยแก้ว ', img: 'https://i.pinimg.com/564x/15/c5/5c/15c55cea1fc6be3bda32ba35e33d33f3.jpg', price: 40 },
    { name: ' ฟักทองแกงบวด ', img: 'https://i.pinimg.com/564x/5c/08/20/5c082013d3f8e48a570a95228596e749.jpg', price: 90 },


  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
