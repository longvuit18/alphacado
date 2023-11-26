export type Supply = {
  [chainName: string]: {
    token: { [tokenName: string]: string }[],
    farm: { [tokenName: string]: string }[],
    lending: { [tokenName: string]: string }[],
    liquid: { [tokenName: string]: string }[]
  }
}