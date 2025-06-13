import { isValidDate, isValidDateAndNotFuture } from "./date";

describe("Date Utilities", () => {
  it("Should to return false when the input is a invalid date", () => {
    const date = isValidDate("2022-22-21");
    expect(date).toEqual("Mês não existe");
  });

  it("Should to return false when the input is a date shorter than allowed", () => {
    const date = isValidDate("2024-02-31");
    expect(date).toEqual("Dia não existe");
  });

  it("Should to return true when the input is a correct date", () => {
    const date = isValidDate("2000-12-01");
    expect(date).toBeTruthy();
  });

  it("Should to return false when the input is a invalid date", () => {
    const date = isValidDateAndNotFuture("2050-12");
    expect(date.success).toBeFalsy();
  });

  it("Should to return false when the input is a future date", () => {
    const date = isValidDateAndNotFuture("2050-12-01");
    expect(date.success).toBeFalsy();
  });
});
