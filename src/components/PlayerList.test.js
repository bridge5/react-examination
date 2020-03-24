import * as R from 'ramda';

const isArray = (Arr) => {
  return R.is(Array, Arr) && !R.isEmpty(Arr)
}

const getCurrentList = (list, current, page) => {
    return R.slice(page * current - page, page * current)(list)
  }


test('测试isArray和getCurrentList方法，获取current页数，每页5个,结果是否正确', () => {
    const testList = [1,2,3,4,5,6,7,8,9,10,11]
    const current = 2;
    const page = 5
    expect(getCurrentList(testList,current,page)).toEqual([6,7,8,9,10]);

  })