import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'Gundam Lfrith', img: 'src/components/image/1.png', price: 490 },
    { name: 'Gundam Aerial', img: 'src/components/image/2.png', price: 650 },
    { name: 'Gundam Aerial Rebuild', img: 'src/components/image/3.png', price: 680 },
    { name: 'Gundam Caliban', img: 'src/components/image/4.png', price: 720 },
    { name: 'Gundam Lfrith UR ', img: 'src/components/image/5.png', price: 590 },
    { name: 'Gundam Thorn', img: 'src/components/image/6.png', price: 570 },
  ]);
  
  return { menu }
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
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
