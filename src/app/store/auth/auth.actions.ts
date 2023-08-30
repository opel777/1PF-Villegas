import { createActionGroup, props } from "@ngrx/store";
import { User } from '../../dashboard/pages/users/model/index';


export const AuthActions = createActionGroup({
    source:'Auth',
    events:{
        'setAuthUser':props<{payload: User | null}>()
    }
})