import { InjectedTimeService } from "./injectedTimeService";

describe("injected time service", () => {
  test("gets the expected iso string", () => {
    const injectedTimeService = new InjectedTimeService(new Date('2023-04-17'));
    expect(injectedTimeService.getCurrentIsoString()).toBe(
      "2023-04-17T00:00:00.000Z"
    );
  });
});
