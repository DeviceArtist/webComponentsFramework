# i8n
```
<h1><ui-i8n lang="zh-cn" zh-cn="你好" en-us="Hello" /></h1>
```

# Buttons
```
<ui-button color="primary"><ui-i8n lang="zh-cn" zh-cn="主要" en-us="primary" /></ui-button>
<ui-button color="success"><ui-i8n lang="zh-cn" zh-cn="成功" en-us="success" /></ui-button>
<ui-button color="danger"><ui-i8n lang="zh-cn" zh-cn="当心" en-us="danger" /></ui-button>
<ui-button color="warning"><ui-i8n lang="zh-cn" zh-cn="警告" en-us="warning" /></ui-button>
<ui-button type="flat"><ui-i8n lang="zh-cn" zh-cn="宽按钮" en-us="flat button" /></ui-button>
<ui-button type="float" right="30px" bottom="90px">
    <div>hello</div>
</ui-button>
<ui-button type="float" right="30px" bottom="30px" pop="left" debug="true">
    <div slot="button">
        <div class="avatar">
            <img src="./avatar.jpg" alt="">
        </div>
    </div>
    <div slot="pop">
        <div class="pop">
            <ui-i8n lang="zh-cn" type="slot">
                <div slot="zh-cn">
                    <input />
                    <ui-button color="primary">提交</ui-button>
                </div>
                <div slot="en-us">
                    <input />
                    <ui-button color="primary">ok</ui-button>
                </div>
            </ui-i8n>
        </div>
    </div>
</ui-button>
```

# Card
```
<ui-card>
    <div slot="title">
        <ui-i8n lang="zh-cn" zh-cn="标题" en-us="title" />
    </div>
    <div slot="body">
        <ui-i8n lang="zh-cn" zh-cn="嗨！" en-us="Hi!" />
    </div>
</ui-card>


<ui-card>
    <div slot="title">
        <ui-i8n lang="zh-cn" zh-cn="标题" en-us="title" />
    </div>
    <div slot="sub_title">
        <ui-i8n lang="zh-cn" zh-cn="副标题" en-us="sub title" />
    </div>
    <div slot="body">
        <ui-i8n lang="zh-cn" type="slot">
            <div slot="zh-cn">
                <a href="">点击这里</a>
            </div>
            <div slot="en-us">
                <a href="">click here</a>
            </div>
        </ui-i8n>
    </div>
</ui-card>
```

# script

```
<script type="module">
import { SetDir, DisplayUI } from './framework.js';
import { Button } from './button.js';
import { I8n } from './i8n.js';
import { Card } from "./card.js";

SetDir('./');
DisplayUI(Button, I8n, Card);

const en = () => {
    for (const el of document.querySelectorAll('[lang]')) {
        el.setAttribute("lang", "en-us");
    }
}

const zh = () => {
    for (const el of document.querySelectorAll('[lang]')) {
        el.setAttribute("lang", "zh-cn");
    }
}
</script>
```
