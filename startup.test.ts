import { createInjectedTimeHandler } from "./startup";
import { createMock } from "@golevelup/ts-jest";
describe("startup", () => {
  test("creates an injected time handler", () => {
    const timeHandler = createInjectedTimeHandler();
    const dummyRequest = createMock<Express.Request>();
    const dummyResponse = createMock<Express.Response>({ send: jest.fn() });
    timeHandler(dummyRequest as any, dummyResponse as any, () => {});
    expect(dummyResponse.send).toHaveBeenCalledWith("");
  });
});
