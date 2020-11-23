import React from "react";
import {hooks} from "mobro";

// ----------------------------------------------------
// component hook

// hooks.component("entry", (Component) => (props) => (
//     <div className="my-wrapper">
//         <Component {...props}/>
//     </div>
// ));

// ----------------------------------------------------
// reducers hook

// const hardwareInitialState = {
//     hardware: "intel"
// }
//
// const dataInitialState = {
//     data: "stuff"
// }
//
// hooks.redux.reducers(event => event.mergeReducers({
//     theme: event.combineReducers({
//         hardware: event.createReducer(hardwareInitialState, {}),
//         data: event.createReducer(dataInitialState, {})
//     })
// }));

// ----------------------------------------------------
// map state to props hook

// hooks.redux.mapStateToProps("app", event => event.mergeMapStateToProps({
//     myCustomPropFromState: event.state.layout.foo,
//     hardware: event.state.theme.hardware.hardware,
//     data: event.state.theme.data.data
// }));