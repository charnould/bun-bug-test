import { expect, it } from "bun:test";
import { readdirSync } from "node:fs";
import { file } from "bun";

// There are some other folders: 'index', 'app'
for (const dir of ["widget"]) {
  const files = readdirSync(`./locales/${dir}/`);
  const reference = await file(`./locales/${dir}/en.json`).json();

  files.forEach(async (f) => {
    const locales = await file(`./locales/${dir}/${f}`).json();
    const number_of_strings = Object.keys(reference).length;

    it(`${dir}/${f}: should contain ${number_of_strings} translations`, () => {
      expect(true).toBe(true);
      expect(Object.keys(locales).length).toBe(number_of_strings);
    });
  });
}
