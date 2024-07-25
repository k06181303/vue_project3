import { createApp } from 'vue'
import App from './App.vue'
import './common/base.css'
import * as elementIcons from '@element-plus/icons-vue';

const app = createApp(App)
for (let iconName in elementIcons) {
    app.component(iconName, elementIcons[iconName]);
  }

app.mount('#app')
