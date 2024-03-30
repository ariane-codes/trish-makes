
export const deskStructure = (S) =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
        .title('General')
        .child(
          S.document()
            .schemaType('general')
            .documentId('general')),
        ...S.documentTypeListItems().filter(listItem => !['general'].includes(listItem.getId())
        )
    ])