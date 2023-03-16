#### Tag 组件

###### 基本

1. Tag 之间有间距

2. Tag type，比如：default, warning, error, processing, success

   每个type，都有一个固定的配套颜色，即每一个配套的边框，背景颜色，字体颜色一样；

   

3. 标签边角圆形化 round

4. 尺寸定制 small medium large

5. 可移除可编辑

###### 功能

1. `button`样式 and `link`样式

   1. `button`有背景，边框，字体颜色；
   2. `link`有字体颜色，鼠标hover变化

2. `Tag` 自定义颜色定制

3. 前后插槽

   slot 支持两种写法

   ```vue
   <temaplte>
      <-- 写法一 -->
   	<ZTag :slot="XXX"/> 
       <-- 写法二 -->
       <ZTag>
       	<temaplte #Icon>
               <XXX />
           </temaplte>
       </ZTag>
   </temaplte>
   ```

暂时只做 

基本 1~4

功能 3