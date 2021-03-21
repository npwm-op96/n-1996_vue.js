import Vue from 'vue';
import Vuex from 'vuex';

import {auth} from './auth.module';
import {product} from './product.module';
import {cart}   from './cart.module'
import {bill}   from './bill.module'

 Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        product,
        auth,
        cart,
        bill
    }
});