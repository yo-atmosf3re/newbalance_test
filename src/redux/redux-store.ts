import * as React from 'react';
import { legacy_createStore as createStore } from 'redux'

import { combineReducers } from "redux";

let rootReducers = combineReducers({

})

export type AppStateType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers)

// @ts-ignore
window.store = store;