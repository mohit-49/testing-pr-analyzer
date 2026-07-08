import store from "../../store";
import * as Action from './action';

const authObj = {
    register: (requestObject: any) => store.dispatch(Action.register(requestObject)),
    login: (requestObject: any) => store.dispatch(Action.login(requestObject)),
    forgot: (requestObject: any) => store.dispatch(Action.forgot(requestObject)),
    reset: (requestObject: any) => store.dispatch(Action.reset(requestObject)),
    getUser: () => store.dispatch(Action.getUser()),
}

export default authObj;