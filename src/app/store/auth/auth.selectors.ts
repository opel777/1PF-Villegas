import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureKey } from "./auth.reducer";
import { state } from "@angular/animations";

export const selectAuthState= createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthUser = createSelector (selectAuthState, (state)=>state.authUser);

export const selectAuthUserRol = createSelector (selectAuthState, (state)=>state.authUser?.rol);

export const selectIsAdmin = createSelector (selectAuthState,(state)=>state.authUser?.rol === 'ADMINISTRADOR')