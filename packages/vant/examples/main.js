import {createApp} from 'vue';
import ELEMENT from 'element-plus';
import vant from 'vant';
import 'vant/lib/index.css';
import 'element-plus/dist/index.css';
import formCreate from '@form-create/element-ui';
import App from './App.vue';
import FcDesigner from '../src/index';

const app = createApp(App);

app.use(ELEMENT);
app.use(vant);
app.use(formCreate);
app.use(FcDesigner);


app.mount('#app')
