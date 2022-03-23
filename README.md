# DataCamp coding test

[robot-simulator.js](https://github.com/joe-dev-public/fac-datacamp-coding-test/blob/main/robot-simulator.js) contains the code that I wrote in response to this challenge.

[robot-simulator.spec.js](https://github.com/joe-dev-public/fac-datacamp-coding-test/blob/main/robot-simulator.spec.js) mostly contains the tests that DataCamp provided (in the above repo), plus a few of my own. (I wanted to test initial bearings other than north, and negative start and end coordinates.)

Screenshot below shows all tests passing in my local environment ✔️

![Screenshot of passing tests in Windows Terminal](https://github.com/joe-dev-public/fac-datacamp-coding-test/blob/main/test-screenshot-1.png)

## Next steps?

It could be fun to build a simple demo site which takes arbitrary user input (starting x/y/bearing and commands) and renders the resulting path on a grid.

The grid would be truncated to the relevant area, e.g. 5 coordinate points either side of the smallest and largest x/y points that the robot travels to. (It might also need some kind of scaling if the command list contains lots of advancing!)

---

Original challenge instructions can be found here: https://github.com/datacamp-engineering/coding-test-simulate-a-robot
