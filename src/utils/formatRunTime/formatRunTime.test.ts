import "@testing-library/jest-dom";
import { formatRunTime } from "@Utils/formatRunTime/formatRunTime";

describe("Utils/formatRunTime", () => {
  it("Should return an empty string if runtime <=0", () => {
    expect(formatRunTime(0)).toBe("");
    expect(formatRunTime(-1)).toBe("");
  });

  it("Should return minutes only if shorter them 1 hour", () => {
    expect(formatRunTime(52)).toBe("52m");
  });

  it("Should return hours and minutes", () => {
    expect(formatRunTime(112)).toBe("1h52m");
  });

  it("Should ignore minutes if it is 0", () => {
    expect(formatRunTime(120)).toBe("2h");
  });
});
