const Robot = require("./robot-simulator");

describe("Robot", function() {
  it("input test #1", () => {
    const robot = new Robot();

    expect(robot.execute("0 0 NORTH A")).toEqual("0 1 NORTH");
  });

  it("input test #2", () => {
    const robot = new Robot();

    expect(robot.execute("7 3 NORTH RAALAL")).toEqual("9 4 WEST");
  });

  it("input test #3", () => {
    const robot = new Robot();

    expect(robot.execute("0 0 NORTH L")).toEqual("0 0 WEST");
  });

  it("input test #4", () => {
    const robot = new Robot();

    expect(robot.execute("0 0 NORTH R")).toEqual("0 0 EAST");
  });

  it("input test #5", () => {
    const robot = new Robot();

    expect(robot.execute("0 0 NORTH AAAALAAAALAAAALAAAAL")).toEqual(
      "0 0 NORTH"
    );
  });

  // Added a few more tests:
  it("input test #6", () => {
    const robot = new Robot();

    expect(robot.execute("3 1 EAST AARAAA")).toEqual("5 -2 SOUTH");
  });

  it("input test #7", () => {
    const robot = new Robot();

    expect(robot.execute("-3 -1 SOUTH ALLAAAALA")).toEqual("-4 2 WEST");
  });

  it("input test #8", () => {
    const robot = new Robot();

    expect(robot.execute("-6 4 WEST ARLLLAAAAAAARAAAA")).toEqual("0 0 SOUTH");
  });
});
