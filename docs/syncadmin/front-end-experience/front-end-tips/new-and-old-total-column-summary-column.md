---
order: 9
---

# New and old total column (summary column)

> There are two ways of summarizing in the project (for example, the table footer summary row and the native summary column). Originally, there was only the table footer summary row, and later a native summary column was added (using antd's own).

#### Effect:

![](https://lfs.k.topthink.com/lfs/cec901370d7c65e9465bb75d3e0d9a40491549984eebded1a32e8c39d416e37d.dat)

![](https://lfs.k.topthink.com/lfs/9e5de647a4be55e9e8f5b69875544ebca1b2fe7271999208efe4f759b74d3294.dat)

#### Instructions:

Footer Total Row  
![](https://lfs.k.topthink.com/lfs/f18ebc4926a8875759de015f82f416703ef7a27380625c6e8d2e29bc845fd704.dat)  
Native summary column  
![](https://lfs.k.topthink.com/lfs/b623eeebce1dbae5cc5bf8b660ed7a203f0e4f512d6fd360a962b5ba08a0dc07.dat)

The parameters of the two are the same. If showSummary is set to true, the original _footer summary row_ method will be used. If it is set to false or not set, the new _native summary column_ method will be used.

#### Advantages of native summary column:

1\. Drag the width of the header column, and the total row will not be misplaced  
. 2. It can solve the problem that the total row statistics are not updated when the column is filtered without configuring the API.  
3\. Add customSummaryRender custom rendering function to the column
