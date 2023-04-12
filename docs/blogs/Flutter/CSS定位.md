---
tag: css定位
category: css定位
desc: 本篇文章主要讲述了CSS的定位知识
title: css定位【1】
date: "2023-3-28"
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/flutter_clean_4.png
---

# CSS定位
大家好，今天我们开始学习Css的定位知识，这个能让你非常轻易的操纵页面元素的位置

> 下面我将讲述相对定位

下面这段代码可以让元素被相对定位，并且可以根据你设置的定位距离随意移动，相对定位元素的定位是相对其正常位置。

```dart
    h1 {
    position:relative;
}
```

![required](/img.png)

移动相对定位元素，但它原本所占的空间不会改变。：

```dart
  h1 {
    position:relative;
    left: 70px;
}
```

相对定位元素经常被用来作为绝对定位元素的容器块。

## 绝对定位

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>:

```dart
   position:absolute;
    left:100px;
    top:150px;
```

absolute 定位使元素的位置与文档流无关，因此不占据空间。

absolute 定位的元素和其他元素重叠。

### 固定定位

元素的位置相对于浏览器窗口是固定位置。

即使窗口是滚动的它也不会移动：

```dart
    position:fixed;
    top:30px;
    right:5px;
}
```

Fixed定位使元素的位置与文档流无关，因此不占据空间。

Fixed定位的元素和其他元素重叠。

需要注意的是Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持。

