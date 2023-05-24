/**
 * Merge Base and Modif properties.
 *
 * @see https://www.npmjs.com/package/@mnrendra/ts-types-merge
 */
export type Merge<
  Base extends object,
  Modif extends object = Record<string, unknown>
> =
  Omit<Base, keyof Modif> & Modif

export default Merge
