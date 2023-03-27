export type Test1 = {
  num1: number;
  num2: number;
};

export const sum2 = (args: Test1) => args.num1 + args.num2;

export const sum1 = (num1: number, num2: number) => num1 + num2;
