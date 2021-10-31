import fs from "fs";

const _repo: string = "./repository/";

export const readDatabase = (db: string) => {
  if (fs.existsSync(`${_repo}${db}`)) {
    const data = fs.readFileSync(`${_repo}${db}`, { encoding: "utf-8" });
    return JSON.parse(data);
  }
  return [];
};

export const writeDatabase = async (data: string[], db: string) => {
  try {
    await fs.writeFileSync(`${_repo}${db}`, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
