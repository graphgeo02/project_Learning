import { atom } from "recoil"
import { selector } from "recoil";
export const atomCart = atom({
    key: "atomCart",
    default: 0,
})

export const  cartEvenOrOdd = selector({
     key: 'cartEvenOrOdd',
     get: ({get}) =>{
        let aCart = get(atomCart);
        return aCart %  2 === 0 ? 'Even': 'Odd';
     }
})
export const selectorBy5 = selector({
     key: 'selectorBy5',
     get: ({get}) =>{
        let aCart = get(atomCart);
        return aCart * 5;
     }
})