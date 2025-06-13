const size = {
  xMinSmall: `
        font-size: 10px;
        line-height: 30px;
    `,
  xSmall: `
        font-size: 12px;
        line-height: 14px;
    `,
  small: `
        font-size: 14px;
        line-height: 20px;
    `,
  xMedium: `
        font-size: 16px;
        line-height: 24px;
    `,
  medium: `
        font-size: 20px;
        line-height: 30px;
    `,
  large: `
        font-size: 24px;
        line-height: 30px;
    `,
  xLarge: `
          font-size: 30px;
          line-height: 30px;
      `,
  xTwoLarge: `
          font-size: 32px;
          line-height: 30px;
      `,
  xMaxLarge: `
          font-size: 34px;
          line-height: 40px;
      `,
} as const;

const type = {
  boldTitle: `
        font-family: Quicksand-Bold;
    `,
  title: `
        font-family: Quicksand-SemiBold;
        font-weight: 600;
    `,
  text: `
        font-family: Quicksand-Regular;
        font-weight: 400;
    `,
  subtitle: `
        font-family: Quicksand-Medium;
        font-weight: 500;
  `,
} as const;

export type SizeType = keyof typeof size;
export type TextType = keyof typeof type;

export default {
  size,
  type,
} as const;
