import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';


describe('App', () => {
  const initialState = {
    newTask: '',
    creating: false
  };
  
  const mockDispatchActions = {
    initializeWithUser: () => jest.fn(),
    initializeTasks: () => jest.fn(),
    createTask: () => jest.fn(),
    updateTask: () => jest.fn(),
    removeTask: () => jest.fn(),
  };

  const app = shallow(<App {...mockDispatchActions} />);

  describe('when initializes', () => {
    const state = app.state();
    it('expects an empty initial state', () => {
      expect(state).toEqual(initialState);
    });
  });

  describe('creating a task', () => {
    describe('when user types into the `TextField`', () => {
      beforeEach(() => {
        // update the input with value
      });

      it('value should be updated in state', () => {
      });
    });

    describe('when user submits the new task', () => {
      beforeEach(() => {
        // update input with value and simulate click
      })
      it('expect `createTask()` action to be called with required props', () => {
      });

      it('expect `newTask` value to be reset', () => {
      });
    });

    describe('should update tasks from props', () => {
      it('with the new task present', () => {
      });
    });
  });

  describe('after creating a task', () => {
    it('props from state should be updated with the new task', () => {
    });

    it('it should be added to the rendered task list', () => {

    });
  });
});