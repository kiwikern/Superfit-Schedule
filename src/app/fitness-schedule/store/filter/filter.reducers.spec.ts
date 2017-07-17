import { filterReducer } from './filter.reducers';
describe('filterReducer', () => {
  it('should add and remove filters', () => {
    let state;

    state = filterReducer({}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'workouts', filterValue: ['bauchxp']}
    });
    expect(state).toEqual({workouts: ['bauchxp']});

    state = filterReducer({workouts: ['bauchxp']}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'workouts', filterValue: ['bauchxp', 'bbp']}
    });
    expect(state).toEqual({workouts: ['bauchxp', 'bbp']});

    state = filterReducer({workouts: ['bauchxp', 'bbp']}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'workouts', filterValue: ['bauchxp', 'bbp', 'bbp2']}
    });
    expect(state).toEqual({workouts: ['bauchxp', 'bbp', 'bbp2']});

    state = filterReducer({workouts: ['bauchxp', 'bbp', 'bbp2']}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'workouts', filterValue: ['bauchxp', 'bbp2']}
    });
    expect(state).toEqual({workouts: ['bauchxp', 'bbp2']});

    state = filterReducer({workouts: ['bauchxp', 'bbp2']}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'workouts', filterValue: ['bauchxp']}
    });
    expect(state).toEqual({workouts: ['bauchxp']});

    state = filterReducer({workouts: ['bauchxp']}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'gyms', filterValue: [0]}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0]}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'gyms', filterValue: [0, 1]}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0, 1]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0, 1]}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'gyms', filterValue: [0, 1, 2]}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0, 1, 2]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0, 1, 2]}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'gyms', filterValue: [0, 1]}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0, 1]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0, 1]}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'gyms', filterValue: [0]}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0]}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'languages', filterValue: [0]}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0], languages: [0]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0], languages: [0]}, {
      type: 'FILTER_REMOVED',
      payload: {filterName: 'languages'}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0]}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'minStartTime', filterValue: 12}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0], minStartTime: 12});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0], minStartTime: 12}, {
      type: 'FILTER_REMOVED',
      payload: {filterName: 'minStartTime'}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0]}, {
      type: 'FILTER_ADDED',
      payload: {filterName: 'maxEndTime', filterValue: 14}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0], maxEndTime: 14});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0], maxEndTime: 14}, {
      type: 'FILTER_REMOVED',
      payload: {filterName: 'maxEndTime'}
    });
    expect(state).toEqual({workouts: ['bauchxp'], gyms: [0]});

    state = filterReducer({workouts: ['bauchxp'], gyms: [0]}, {
      type: 'FILTER_REMOVED',
      payload: {filterName: 'gyms'}
    });
    expect(state).toEqual({workouts: ['bauchxp']});

    state = filterReducer({workouts: ['bauchxp']}, {
      type: 'FILTER_REMOVED',
      payload: {filterName: 'workouts'}
    });
    expect(state).toEqual({});
  });
});
