import { observable, computed, action } from 'mobx';
class AppStore {
    @observable todos = []; //todos列表
    @observable newtodo = "232"; //新添加的todo
    @observable selectedRowKeys = []; //选择行的key
    @observable loading = true; //Table-loading
    @observable _key = 0; //key
    @observable total = 0; //数据量

    //添加 注意this的执行 必须用剪头函数
    @action AddTodo = () => {
        this._key += 1;

    };

    //计算长度  接受一个函数
    @computed get TodoListCount() {
        return this._key;
    }
}
export default AppStore;