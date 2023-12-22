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

### 修改的点

1. 启动项目报错，经排查是 webpack 内部 createHash 函数有问题，更新 react-scripts 包可解决
2. 由于该部分逻辑并不复杂，因此都改为函数式组件进行编写
3. 将 store 当做接口层，封装 useMount hook，当初次渲染时 dispatch action 去拿到最新数据、渲染列表
4. 增加：当输入 名称、定位、球队信息提交时，将数据传给 store，成功后清空输入框，并重新请求最新的列表数据
5. 删除：当点击删除按钮时，需要将信息传给 store，删除成功后请求最新的列表数据，如果此时列表数据为空，判断 page，如果 page>1，则使用 page-1 重新请求列表数据
6. 查找：封装 useStorageState、useUpdateEffect，当用户搜索时，可自动进行防抖，且忽略首次请求。当改变 pageSize、keyword 时，会重置分页
7. 分页器：按照 antd 用法封装的简易分页器

- 这里面遇到的卡点：select 中的 onChange 触发时，获取到的 event.target.value 为空，经研究，跟 react 的版本有关系，16.12.0 版本应该用 e.nativeEvent.target.value 来取值
