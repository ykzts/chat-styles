// @flow

import localForage from 'localforage';
import type { Dispatch } from 'redux';

export const PREVIEW_INVERT_CHANGE_FAIL = 'PREVIEW_INVERT_CHANGE_FAIL';
export const PREVIEW_INVERT_CHANGE_REQUEST = 'PREVIEW_INVERT_CHANGE_REQUEST';
export const PREVIEW_INVERT_CHANGE_SUCCESS = 'PREVIEW_INVERT_CHANGE_SUCCESS';
export const PREVIEW_INVERT_FETCH_FAIL = 'PREVIEW_INVERT_FETCH_FAIL';
export const PREVIEW_INVERT_FETCH_REQUEST = 'PREVIEW_INVERT_FETCH_REQUEST';
export const PREVIEW_INVERT_FETCH_SUCCESS = 'PREVIEW_INVERT_FETCH_SUCCESS';

export const changePreviewInvertFail = (error: Error) => ({
  error,
  type: PREVIEW_INVERT_CHANGE_FAIL,
});

export const changePreviewInvertRequest = () => ({
  type: PREVIEW_INVERT_CHANGE_REQUEST,
});

export const changePreviewInvertSuccess = (invert: boolean) => ({
  invert,
  type: PREVIEW_INVERT_CHANGE_SUCCESS,
});

export const changePreviewInvert = (invert: boolean) => async (dispatch: Dispatch) => {
  dispatch(changePreviewInvertRequest());

  try {
    await localForage.setItem('preview.invert', invert);
    dispatch(changePreviewInvertSuccess(invert));
  } catch (error) {
    dispatch(changePreviewInvertFail(error));
  }
};

export const fetchPreviewInvertFail = (error: Error) => ({
  error,
  type: PREVIEW_INVERT_FETCH_FAIL,
});

export const fetchPreviewInvertRequest = () => ({
  type: PREVIEW_INVERT_FETCH_REQUEST,
});

export const fetchPreviewInvertSuccess = (invert: boolean) => ({
  invert,
  type: PREVIEW_INVERT_FETCH_SUCCESS,
});

export const fetchPreviewInvert = () => async (dispatch: Dispatch) => {
  dispatch(fetchPreviewInvertRequest());

  try {
    const keys = await localForage.keys();
    if (!keys.includes('preview.invert')) {
      dispatch(fetchPreviewInvertSuccess(false));
      return;
    }

    const invert = await localForage.getItem('preview.invert');
    dispatch(fetchPreviewInvertSuccess(invert));
  } catch (error) {
    dispatch(fetchPreviewInvertFail(error));
  }
};
