---
order: 5
---

# globalization

## example

The file content of the created file `lang/zh_CN/components/modal.ts`is

```
{
  title: '标题';
}
```

copy

Then use directly

```
 const { t } = useI18n();
 t('components.modal.title')
```

copy

Get internationalized text.

## Internationalization configuration code

![](https://lfs.k.topthink.com/lfs/56fd0744022b945f4d02e03049c40481e672906a7734389b167298f353bfce26.dat)

---

# Explanation of the principles of internationalization

If you are using the vscode development tool, it is recommended to install the [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) plugin

## I18n-ally plugin

After installing the plugin, you can see the corresponding language content in your code in real time  
![](https://upload.jeecg.com/jeecg/help/jeecgvue3/images/screenshot_1665306496350.png)

## Configure the default language

The default language can be configured in \[src/settings/localeSetting.ts\]

```
export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en',
};

export const localeSetting: LocaleSetting = {
  // 是否显示语言选择器
  showPicker: true,
  // 当前语言
  locale: LOCALE.ZH_CN,
  // 默认语言
  fallback: LOCALE.ZH_CN,
  // 允许的语言
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};

// 配置语言列表
export const localeList: DropMenu[] = [
  {
    text: '简体中文',
    event: 'zh_CN',
  },
  {
    text: 'English',
    event: 'en',
  },
];
```

copy

## Configuration

The i18n introduced in \[src/locales/setupI18n.ts\] does not need to be modified

### Language files

In \[src/locales/lang/\] you can configure the specific language

```
# locales/lang/

# 中文语言
zh_CN:
  component: 组件相关
  layout: 布局相关
  routes: 路由菜单相关
  sys: 系统页面相关

en: 同上

```

copy

### Language import logic description

1.  initialization

In the root language file in \[src/locales/setupI18n\] you can see

```
const defaultLocal = await import(`./lang/${locale}.ts`);
```

copy

This will import `src/locales/lang/{lang}.ts`the file language pack, which will import all files in the corresponding language.

```
import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/zh_CN';
import momentLocale from 'moment/dist/locale/zh-cn';

const modules = import.meta.globEager('./zh_CN/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'zh_CN'),
    antdLocale,
  },
  momentLocale,
  momentLocaleName: 'zh-cn',
};
```

copy

And convert it into a multi-level directory structure according to the corresponding

example:

`lang/zh_CN/components/modal.ts`The file content is

```
{
  title: '标题';
}
```

copy

Then use it directly to `t('components.modal.title')`obtain it.

The advantage of this is that it is easier to manage multiple languages ​​for large projects. If you don't need to divide it into modules, you can just import it manually.

## use

**Be careful not to introduce useI18n of vue-i18n** when introducing the project`useI18n`

```
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

const title = t('components.modal.title');
```

copy

## Switch language

To switch languages, you need to use \[src/locales/useLocale.ts\]

```
import { useLocale } from '/@/locales/useLocale';

const { changeLocale } = useLocale();

changeLocale('en');
```

copy

## Added

### Language files

Just add the corresponding language file in \[src/locales/lang/\]

### Add new language

Currently, the project comes `zh_CN`with only `en`two languages:

If you need to add new ones, just follow the steps below.

1.  Add the corresponding language directory and language files under \[src/locales/lang/\] and import the corresponding language packages of ant-design-vue and moment
2.  Add preview type definition in \[types/config.d.ts\]
3.  Modify the language configuration in \[src/settings/localeSetting.ts\]

## Remotely read language data

Currently, the project will `src/main.ts`wait for `setupI18n`this function to execute before rendering the interface, so you only need to send an ajax request in setupI18n to set the corresponding data to the i18n instance.

```
// src/main.ts
await setupI18n(app);

app.mount('#app', true);
```

copy

### setupI18n function

Code: \[src/locales/setupI18n/\]

As shown below, a default language will be set here first. The default language can be set locally or you can wait for the interface to return the default language here.

```
// setup i18n instance with glob
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  i18n = createI18n(options) as I18n;
  app.use(i18n);
}

async function createI18nOptions(): Promise<I18nOptions> {
  const locale = localeStore.getLocale;

  // 这里改成接口获取
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};

  return {
    legacy: false,
    locale,
    fallbackLocale: fallback,
    messages: {
      [locale]: message,
    },
    availableLocales: availableLocales,
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  };
}
```

copy

### changeLocale function

Code: \[src/locales/useLocale/\]

When you manually switch the language `useLocale`, the function will be triggered. useLocale is also an asynchronous function. You only need to wait for the interface to return the response data before setting it.

```
async function changeLocale(locale: LocaleType) {
  const globalI18n = i18n.global;
  const currentLocale = unref(globalI18n.locale);
  if (currentLocale === locale) return locale;

  if (loadLocalePool.includes(locale)) {
    setI18nLanguage(locale);
    return locale;
  }
  // 这里改成接口获取
  const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule;
  if (!langModule) return;

  const { message, momentLocale, momentLocaleName } = langModule;

  globalI18n.setLocaleMessage(locale, message);
  moment.updateLocale(momentLocaleName, momentLocale);
  loadLocalePool.push(locale);

  setI18nLanguage(locale);
  return locale;
}
```

copy
