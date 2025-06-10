---
order: 4
---

# Multi-level linkage configuration

> - Multi-level linkage can only act on `JVxeTypes.select`components
> - Configuration example: src/views/demo/jeecg/JVxeTableDemo/JVxeDemo4.vue

## Configuration Document

JVxeTable has built-in multi-level linkage implementation and can be used with simple configuration.

### Component Configuration

Add a new parameter to the component `linkageConfig`and bind an array. Each item in the array is a linkage configuration, so multiple isolated linkages can be achieved.

![](https://lfs.k.topthink.com/lfs/0b15c2a206d4483bce9c5bd80add7bf09fe00f9a5158c3141c6a04a11ae2c424.dat)  
![](https://lfs.k.topthink.com/lfs/1d2976bb3157cb44cea86bf1b9ff6b1a87023f50fb371ac43ac90baec50dc37b.dat)

- `key`Configure the first level columnKey of linkage
- `requestData`Define a method that returns a Promise that returns an array of `select`drop-down options (must contain `value`fields `text`)

### Column Configuration

You only need to add one attribute to the column `linkageKey`, which means linking the lower levels.  
For example, fill in the columnKey of the second level for the first level, fill in the columnKey of the third level for the second level, and so on. You can fill in as many levels as you want.

### Complete Configuration Example

![](https://lfs.k.topthink.com/lfs/07c232442d77baaadb5b31f0b63039f8cde2e04c7a700efcd21eac1c59de9e9c.dat)  
![](https://lfs.k.topthink.com/lfs/f51ee65ebf3f5341aafe5eab9d79ebff448829d72aec4e223c4d4b2de1071b65.dat)

### Effect Demonstration

Demo address: Components & Functions --> Jeecg Component Example --> JVxeTable Example --> Linkage Example  
![](https://lfs.k.topthink.com/lfs/b01b36da8a615b360738fbc5f5c46fb1ca55bf1985444960546b690dbaf5b859.dat)
