import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import { dispatch } from '@angular-redux/store';
import { Feedback } from '../feedback-interface';
import { IPayloadAction } from '../../store/payload-action.types';
import { FeedbackPayload } from './feedback-payload-interface';

@Injectable()
export class FeedbackActions {
  static readonly LOAD_FEEDBACK_REQUEST = 'LOAD_FEEDBACK_REQUEST';
  static readonly LOAD_FEEDBACK_SUCCESS = 'LOAD_FEEDBACK_SUCCESS';
  static readonly LOAD_FEEDBACK_FAIL = 'LOAD_FEEDBACK_FAIL';
  static readonly SEND_FEEDBACK_REQUEST = 'SEND_FEEDBACK_REQUEST';
  static readonly SEND_FEEDBACK_SUCCESS = 'SEND_FEEDBACK_SUCCESS';
  static readonly SEND_FEEDBACK_FAIL = 'SEND_FEEDBACK_FAIL';
  static readonly SEND_RESPONSE_REQUEST = 'SEND_RESPONSE_REQUEST';
  static readonly SEND_RESPONSE_SUCCESS = 'SEND_RESPONSE_SUCCESS';
  static readonly SEND_RESPONSE_FAIL = 'SEND_RESPONSE_FAIL';
  static readonly MARK_FEEDBACK_READ_REQUEST = 'MARK_FEEDBACK_READ_REQUEST';
  static readonly MARK_FEEDBACK_READ_SUCCESS = 'MARK_FEEDBACK_READ_SUCCESS';
  static readonly MARK_FEEDBACK_READ_FAIL = 'MARK_FEEDBACK_READ_FAIL';

  constructor(private angulartics: Angulartics2) {
  }

  @dispatch()
  loadFeedback(): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'loadFeedback', properties: {}});
    return {
      type: FeedbackActions.LOAD_FEEDBACK_REQUEST
    };
  }

  loadFeedbackSuccess(feedbackList: Feedback[]): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'loadFeedbackSuccess', properties: {}});
    return {
      type: FeedbackActions.LOAD_FEEDBACK_SUCCESS,
      payload: {feedbackList}
    };
  }

  loadFeedbackError(error): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'loadFeedbackError', properties: {category: error}});
    return {
      type: FeedbackActions.LOAD_FEEDBACK_FAIL,
      payload: error
    };
  }

  @dispatch()
  sendFeedback(feedback): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'sendFeedback', properties: {}});
    return {
      type: FeedbackActions.SEND_FEEDBACK_REQUEST,
      payload: {feedback}
    };
  }

  sendFeedbackSuccess(): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'sendFeedbackSuccess', properties: {}});
    return {
      type: FeedbackActions.SEND_FEEDBACK_SUCCESS
    };
  }

  sendFeedbackError(error): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'sendFeedbackError', properties: {category: error}});
    return {
      type: FeedbackActions.SEND_FEEDBACK_FAIL,
      payload: error
    };
  }

  @dispatch()
  sendResponse(response): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'sendResponse', properties: {}});
    return {
      type: FeedbackActions.SEND_RESPONSE_REQUEST,
      payload: {response}
    };
  }

  sendResponseSuccess(): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'sendResponseSuccess', properties: {}});
    return {
      type: FeedbackActions.SEND_RESPONSE_SUCCESS
    };
  }

  sendResponseError(error): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'sendResponseError', properties: {category: error}});
    return {
      type: FeedbackActions.SEND_RESPONSE_FAIL,
      payload: error
    };
  }

  @dispatch()
  markFeedbackRead(feedbackId): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'markFeedbackRead', properties: {}});
    return {
      type: FeedbackActions.MARK_FEEDBACK_READ_REQUEST,
      payload: {feedbackId}
    };
  }

  markFeedbackReadSuccess(): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'markFeedbackReadSuccess', properties: {}});
    return {
      type: FeedbackActions.MARK_FEEDBACK_READ_SUCCESS
    };
  }

  markFeedbackReadError(error): IPayloadAction<FeedbackPayload> {
    this.angulartics.eventTrack.next({action: 'markFeedbackReadError', properties: {category: error}});
    return {
      type: FeedbackActions.MARK_FEEDBACK_READ_FAIL,
      payload: error
    };
  }

}
