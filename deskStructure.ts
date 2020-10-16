import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem().title('Oppsett').icon(MdSettings).child(S.editor().schemaType('oppsett').documentId('oppsett')),
      ...S.documentTypeListItems().filter((listItem) => !['oppsett'].includes(listItem.getId())),
    ]);
