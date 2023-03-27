export type Test1 = {
  num1: number;
  num2: number;
};

export const sum1 = (num1: number, num2: number) => num1 + num2;

export const sum2 = (args: Test1) => args.num1 + args.num2;

export const sum3 = (num1: number, num2: number, num3: number) =>
  num1 + num2 + num3;
