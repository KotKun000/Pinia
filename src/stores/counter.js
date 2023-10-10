import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'Gundam Lfrith', img: 'https://media.discordapp.net/attachments/740983397358501958/1161397909217095711/1.png?ex=65382717&is=6525b217&hm=3fe6fddafcdae2ba25151740dc4f491333abff60f232165336657f4430a812a2&=', price: 490 },
    { name: 'Gundam Aerial', img: 'https://media.discordapp.net/attachments/740983397358501958/1161397909988839545/2.png?ex=65382717&is=6525b217&hm=5fee6976f789bdb03a4c48623c58c59696d67ff5aac739ecc3eff712ac1d0ffc&=&width=1059&height=676', price: 650 },
    { name: 'Gundam Aerial Rebuild', img: 'https://media.discordapp.net/attachments/740983397358501958/1161397910374711347/3.png?ex=65382717&is=6525b217&hm=67707e250be4f6e329468bc8b16ff82e9e4ede9d23c25cce1f2756686a1acd7b&=', price: 680 },
    { name: 'Gundam Caliban', img: 'https://media.discordapp.net/attachments/740983397358501958/1161397910672511126/4.png?ex=65382717&is=6525b217&hm=8c74eec5ad41ac195934950c719c25ad99aa29f1a23f884b79120b4c33eaabe0&=&width=1035&height=676', price: 720 },
    { name: 'Gundam Lfrith UR ', img: 'https://media.discordapp.net/attachments/740983397358501958/1161397911029022810/5.png?ex=65382717&is=6525b217&hm=b7dc78513fc5dc712746d1ab49cf4d8d736a36940f26450f603839c51d741d0a&=&width=1074&height=676', price: 590 },
    { name: 'Gundam Thorn', img: 'https://media.discordapp.net/attachments/740983397358501958/1161397911771418644/6.png?ex=65382717&is=6525b217&hm=8754c325c334431b327dfc6b520b85018d6392d8cb00bbdd643aaab61aee461f&=&width=1074&height=676', price: 570 },
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
