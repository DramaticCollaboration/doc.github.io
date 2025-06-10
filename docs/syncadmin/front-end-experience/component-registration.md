---
order: 11
---

# Component Registration

## Import on demand

The current component registration mechanism of the project is on-demand registration, which is introduced only on the page where it is needed.

```
<template>
  <Menu>
    <SubMenu></SubMenu>
  <Menu>

  <menu>
    <sub-menu></sub-menu>
  <menu>
</template>
<script>
import { Menu } from 'ant-design-vue';
export default defineComponent({
  components: {
    Menu: Menu,
    SubMenu: Menu.SubMenu
  },
})
</script>
```

copy

### tsx file registration

**Globally registered components cannot be used in tsx files**

```
import { Menu } from 'ant-design-vue';

export default defineComponent({
  setup() {
    return () => (
      <Menu>
        <Menu.SubMenu></Menu.SubMenu>
      </Menu>
    );
  },
});
```

copy

## Global Registration

If you are not used to the on-demand import method, you can register globally. There are two ways to register globally.

### Global on-demand registration

Only register components you need

Code address: [src/components/registerGlobComp.ts](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/components/registerGlobComp.ts)

```
import {
  // Need
  Button as AntButton,
  Optional
  Select,
  Alert,
  Checkbox,
  DatePicker,
  Radio,
  Switch,
  Card,
  List,
  Tabs,
  Descriptions,
  Tree,
  Table,
  Divider,
  Modal,
  Drawer,
  Dropdown,
  Tag,
  Tooltip,
  Badge,
  Popover,
  Upload,
  Transfer,
  Steps,
  PageHeader,
  Result,
  Empty,
  Avatar,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Row,
  Col,
  Spin,
} from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app
    .use(Select)
    .use(Alert)
    .use(Breadcrumb)
    .use(Checkbox)
    .use(DatePicker)
    .use(Radio)
    .use(Switch)
    .use(Card)
    .use(List)
    .use(Descriptions)
    .use(Tree)
    .use(Table)
    .use(Divider)
    .use(Modal)
    .use(Drawer)
    .use(Dropdown)
    .use(Tag)
    .use(Tooltip)
    .use(Badge)
    .use(Popover)
    .use(Upload)
    .use(Transfer)
    .use(Steps)
    .use(PageHeader)
    .use(Result)
    .use(Empty)
    .use(Avatar)
    .use(Menu)
    .use(Tabs)
    .use(Form)
    .use(Input)
    .use(Row)
    .use(Col)
    .use(Spin);
}
```

copy

### Full registration

- `main.ts`Inside

```
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
const app = createApp(App);
app.use(Antd);
```

copy

- Delete the following code

```
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}
```

copy
