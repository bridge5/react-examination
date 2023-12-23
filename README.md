# react-examination

Building a user friendly interface with React.js, Redux/Mobx and LESS/SCSS.

## Steps

- Step1: clone this repository to your account.
- Step2: finish the following tasks.
- Step3: Send Pull Request to repository _bridge5/react-examination_.

## Tasks

- Please add pagination support to the list when there are more than _5_ entries.
- Please add option to select position of a player SF/PG and display it.
- Please add tests using your preferred testing tool (jest, enzyme, mocha, ...).
- Please add some features that could help you show your personal abilities.

## Objectives

- Please check for small things like syntax errors, since details matter.
- Please deliver something that works, non working project is an automatic disqualification.

## 步骤

- 第一步：克隆这个仓库到你自己的账号里。
- 第二步：完成下列任务。
- 第三步：发送 _ Pull Request_ 到仓库 _bridge5/react-examination_。

## 修改

1. 启动项目报错，经排查是 webpack 内部 createHash 函数有问题，更新 react-scripts 包可解决
2. 整体思路
   - 由于该功能类似于留言板功能，因此增删改查、分页等为必要功能。这里将 PlayerListApp 组件作为容器组件，负责逻辑处理
   - 其他 添加、搜索、查看等 UI 组件负责渲染即可，不参与逻辑处理
   - 将 store 当做数据层，数据层需要返回两个数据：需要显示的列表数据 showPlayersById 和 总数据量 total，分页、过滤等逻辑都应在数据层做处理
   - 添加逻辑：当输入名称、定位、球队信息提交时，将数据传给 store，成功后清空输入框，并重新请求最新的列表数据
   - 删除逻辑：当点击删除按钮时，需要将 id 传给 数据处理层，删除成功后请求最新的列表数据。（这里需要注意：如果此时列表数据为空 且 page > 1，则使用 page-1 重新请求列表数据）
   - 查找逻辑：封装 useMount 处理第一次渲染的逻辑请求，封装 useUpdateEffect 和 useUpdateDebounceEffect，当重新渲染时处理其中的逻辑
   - 分页器：按照 antd 用法封装的简易分页器
   - 加入 form 必填检验，自动生成 id 等，筛选框支持过滤收藏的等
3. 样式修复
4. 这里面遇到的卡点：select 中的 onChange 触发时，获取到的 event.target.value 为空，经研究，跟 react 的版本有关系，16.12.0 版本应该用 e.nativeEvent.target.value 来取值
5. 用户体验优化：封装 useStorageState，该 hook 可用来缓存用户的查询参数，防止用户刷新或再次进入时查询数据丢失

## 自测用例

1. 添加球员
   - 当输入球员姓名、位置、团队时，列表有无正常显示
   - 当球员姓名为空时，应添加失败
2. 删除球员
   - 当点击删除按钮，列表是否正常显示
   - 先选择第二页，将第二页删完，此时是否重置到了第一页且正常显示
3. 查询列表
   - 输入球员姓名、位置、团队时，列表有无正常过滤
   - 当输入大小写时，列表有无正常过滤
   - 当改变搜索条件时，分页是否重置并正常显示数据
   - 当输入搜索条件后，刷新列表，搜索条件是否依然保留
4. 收藏球员
   - 点击收藏按钮时，列表有无正常显示
   - 点击取消收藏按钮时，列表有无正常显示

## 单元测试

由于单元测试只是了解，而且在写的过程中库报错，简单判断下是因为 react-dom 包变更所致，因此只写了一个 useFirstMount.test.js
