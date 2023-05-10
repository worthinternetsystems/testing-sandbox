import { TimeService } from "./service";

describe('time service', () => {
  it('should return with the current time', () => { 
    const timeService = new TimeService();

    expect(timeService.getDay()).toEqual(new Date().getDay());
  });
});