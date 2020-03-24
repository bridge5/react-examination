import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
// import {SELECT_PLAYER} from '../constants/ActionTypes';
// const url = '';
//  const ListEpic= (action$)=> (
    //  action$
        // .ofType(SELECT_PLAYER)
    //     .catch((error) =>console.log(error))
    // 可以截取action，拍扁成流形式，在这里进行异步请求数据处理之类，。rxjs提供了很多异步处理操作符，
// )

// export const rootEpic = combineEpics(ListEpic);
export const rootEpic = combineEpics();
