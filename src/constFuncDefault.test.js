import defaultExport, { myConst, myFunction } from "./constFuncDefault";

jest.mock("./constFuncDefault", () => {
  const originalModule = jest.requireActual("./constFuncDefault");

  const defaultFn = jest.fn();

  return {
    __esModule: true,
    ...originalModule,
    default: defaultFn,
    myConst: "mocked const",
  };
});

test("should do a partial mock", () => {
  defaultExport.mockImplementation(() => "mocked default");
  expect(myConst).toBe("mocked const");
  expect(myFunction()).toBe("function");

  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe("mocked default");
  expect(defaultExport).toHaveBeenCalled();
});
