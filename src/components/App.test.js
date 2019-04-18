import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';


describe('App', () => {

  const mockActions = {
    initializeWithUser: jest.fn().mockImplementation((user) => user),
    initializeTasks: jest.fn(),
    createTask: jest.fn().mockImplementation((task) => task),
    updateTask: jest.fn().mockImplementation((task) => task),
    removeTask: jest.fn().mockImplementation((taskId) => taskId),
  };

  const app = shallow(<App {...mockActions} />);

  describe('when initializes', () => {
    it('expect to dispatch `initializeTasks()` action', () => {
      expect(mockActions.initializeTasks).toHaveBeenCalled();
    });
  })
});