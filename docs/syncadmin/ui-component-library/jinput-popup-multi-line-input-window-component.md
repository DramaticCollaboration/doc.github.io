---
order: 26
---

# JInputPopup Multi-line input window component✔

Used in scenarios where the height is limited but multiple lines of input are required, such as line editing

## Component Parameters

| parameter      | type   | Required | default value | illustrate                                                                                                                                                         |
| -------------- | ------ | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| value(v-model) | string |          | ''            |                                                                                                                                                                    |
| title          | string |          | ''            | Popup title                                                                                                                                                        |
| position       | string |          | 'right'       | Pop-up box display position, optional`top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` |
| width          | number |          | 300           | Popup box width                                                                                                                                                    |
| height         | number |          | 150           | Popup box height                                                                                                                                                   |
| popContainer   | string |          | ''            | The element ID where the popup is mounted                                                                                                                          |
| disabled       | bool   |          | false         | Disable                                                                                                                                                            |

> For more parameters, see: [Input box](https://2x.antdv.com/components/input-cn/#API)

## Show results

![](https://lfs.k.topthink.com/lfs/0786d6ad749ccee86d353561731bffff15bf574d9c4c6036753812d0e953d168.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
    {
        field: 'JInputPopup',
        component: 'JInputPopup',
        label: 'JInputPopup',
    },
]
```

copy
