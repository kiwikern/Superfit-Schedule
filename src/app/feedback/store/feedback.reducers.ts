import { FeedbackState } from './feedback-state.interface';
import { FeedbackActions } from './feedback.actions';
import { IPayloadAction } from '../../store/payload-action.types';

export const INITIAL_STATE: FeedbackState = {
  feedbackList: [],
  responses: [],
  hasError: false,
  isLoading: false,
  isSending: false
};

export function feedbackReducer(state: FeedbackState = INITIAL_STATE,
                                action: IPayloadAction<any>): FeedbackState {

  const newState = Object.assign({}, state);
  switch (action.type) {
    case FeedbackActions.LOAD_FEEDBACK_REQUEST:
      newState.isLoading = true;
      break;
    case FeedbackActions.LOAD_FEEDBACK_SUCCESS:
      newState.isLoading = false;
      newState.hasError = false;
      newState.responses = action.payload.responses;
      newState.feedbackList = action.payload.feedbackList;
      break;
    case FeedbackActions.LOAD_FEEDBACK_FAIL:
      newState.isLoading = false;
      newState.hasError = true;
      break;
    case FeedbackActions.SEND_FEEDBACK_REQUEST:
      newState.isSending = true;
      break;
    case FeedbackActions.SEND_FEEDBACK_SUCCESS:
      newState.isSending = false;
      newState.hasError = false;
      break;
    case FeedbackActions.SEND_FEEDBACK_FAIL:
      newState.isSending = false;
      newState.hasError = true;
      break;
    case FeedbackActions.SEND_RESPONSE_REQUEST:
      newState.isSending = true;
      break;
    case FeedbackActions.SEND_RESPONSE_SUCCESS:
      newState.isSending = false;
      newState.hasError = false;
      break;
    case FeedbackActions.SEND_RESPONSE_FAIL:
      newState.isSending = false;
      newState.hasError = true;
      break;
  }


  return newState;
}
