import { TimeService } from "./nonInjectedTimeService";

describe("noninjected time service useFakeTImers (doesnt work with async)", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2023-04-17"));
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  test("gets the expected iso string", () => {
    const timeService = new TimeService();
    expect(timeService.getCurrentIsoString()).toBe("2023-04-17T00:00:00.000Z");
  });
});
