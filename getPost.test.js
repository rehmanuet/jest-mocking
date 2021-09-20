const getPost = require("./getPost");
const mockedAxios = require("axios");

describe("", () => {
  let res;
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Original Implementation of axios ", async () => {
    res = await getPost();
    expect(res.length).toBe(100);
  });

  it("Original Implementation of axios with data validation", async () => {
    let [fid] = res;
    expect(fid.id).toBe(1);
  });

  it("Mocked Implementation of axios", async () => {
    jest.mock("axios");
    mockedAxios.get = jest.fn().mockResolvedValue({ data: new Array(99) });
    res = await getPost();
    expect(res.length).toBe(99);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
  it("Mocked Implementation of axios with data validations", async () => {
    jest.mock("axios");
    mockedAxios.get = jest.fn().mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: "test",
        },
      ],
    });
    res = await getPost();
    let [fid] = res;
    expect(fid.id).toBe(1);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
