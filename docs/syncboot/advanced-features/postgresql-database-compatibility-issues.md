---
order: 4
---

# Postgresql database compatibility issues

## postgresql script

For databases that do not provide scripts, you can refer to [the documentation](https://my.oschina.net/jeecg/blog/4905722) to transfer the database yourself.

## Postgresql database compatibility issues

> Problem: When transferring MySQL data to Postgres, the original Tinyint type will be converted to Int2 type. At this time, the entity attribute is of Boolean type, which will cause data insertion failure.

**Solution:** Add postgres data conversion rules (log in to postgres, switch to your own database, and execute the following code):

```
create or replace function bool_to_int(boolean) returns int2 as $$
  select CAST($1::int as int2);
$$ language sql strict;
create cast (bool as int2) with function bool_to_int(boolean) as implicit;
```

copy

![](https://lfs.k.topthink.com/lfs/c283ba7ac4391351a9a7120667917cb3500884efc988be6c498c59a9716e05e9.dat)
