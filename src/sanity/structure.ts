import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("menu").title("Menu"),
      S.documentTypeListItem("review").title("Review"),
      S.documentTypeListItem("menuImages").title("Menu Images"),
      S.documentTypeListItem("category").title("Category"),
    ]);
