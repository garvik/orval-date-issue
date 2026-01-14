# How to reproduce this issue

- `yarn install`
- `yarn api`
- `yarn tsc`

You should get a `Type 'string | undefined' is not assignable to type 'string'.` on `export const getGetFooResponseMock = (overrideResponse: Partial< Foo > = {}): Foo => ({bar: faker.date.past().toISOString().split('T')[0], ...overrideResponse})`.

The problem occurs only when `noUncheckedIndexedAccess` is set to `true` in `tsconfig.json`, and only for properties with `format: "date"`