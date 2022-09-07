import S from '@sanity/desk-tool/structure-builder';
import PreviewComponent from '../components/PreviewComponent';

export const getDefaultDocumentNode = () => {
    return S.document().views([
        S.view.form(),
        S.view.component(PreviewComponent).title('Preview'),
    ]);
};

export default S.defaults;