import { render } from '@testing-library/react';
import PreviewComponent from './PreviewComponent';
import { ThemeProvider, studioTheme } from '@sanity/ui';
const DRAFT_BANNER_TEST_ID = 'draftBanner';

// Captured a few document states to emulate various editing stages
const mockDocument = {
  new: { "draft": null, "displayed": { "_type": "article" }, "historical": { "_type": "article" }, "published": null },
  draft: { "draft": { "_id": "drafts.5282fd81-e8ce-4e6a-8b78-3726f3362255", "_type": "article", "title": "My New Article", "_rev": "8mfhi1-fcs-3hh-qwc-mhcf8jaqq", "_updatedAt": "2022-09-07T03:31:11.865Z" }, "displayed": { "_id": "drafts.5282fd81-e8ce-4e6a-8b78-3726f3362255", "_type": "article", "title": "My New Article", "_rev": "8mfhi1-fcs-3hh-qwc-mhcf8jaqq", "_updatedAt": "2022-09-07T03:31:11.865Z" }, "historical": { "_id": "drafts.5282fd81-e8ce-4e6a-8b78-3726f3362255", "_type": "article", "title": "My New Article", "_rev": "8mfhi1-fcs-3hh-qwc-mhcf8jaqq", "_updatedAt": "2022-09-07T03:31:11.865Z" }, "published": null },
  published: { "draft": null, "displayed": { "_createdAt": "2022-09-07T03:31:45Z", "_id": "5282fd81-e8ce-4e6a-8b78-3726f3362255", "_rev": "ogNshYaSWBtuB9KID2UMUf", "_type": "article", "_updatedAt": "2022-09-07T03:31:45Z", "title": "My New Article" }, "historical": { "_createdAt": "2022-09-07T03:31:45Z", "_id": "5282fd81-e8ce-4e6a-8b78-3726f3362255", "_rev": "ogNshYaSWBtuB9KID2UMUf", "_type": "article", "_updatedAt": "2022-09-07T03:31:45Z", "title": "My New Article" }, "published": { "_createdAt": "2022-09-07T03:31:45Z", "_id": "5282fd81-e8ce-4e6a-8b78-3726f3362255", "_rev": "ogNshYaSWBtuB9KID2UMUf", "_type": "article", "_updatedAt": "2022-09-07T03:31:45Z", "title": "My New Article" } },
  edited: { "draft": { "_id": "drafts.5282fd81-e8ce-4e6a-8b78-3726f3362255", "_type": "article", "_createdAt": "2022-09-07T03:31:45Z", "title": "My New Article", "body": [{ "_type": "block", "_key": "3926f5d12874", "style": "normal", "markDefs": [], "children": [{ "_type": "span", "_key": "ab3f9b39a62e", "text": "My edits", "marks": [] }] }], "_rev": "mi7o2j-ypo-sqd-pi9-4nzkfvmp2", "_updatedAt": "2022-09-07T03:33:02.831Z" }, "displayed": { "_id": "drafts.5282fd81-e8ce-4e6a-8b78-3726f3362255", "_type": "article", "_createdAt": "2022-09-07T03:31:45Z", "title": "My New Article", "body": [{ "_type": "block", "_key": "3926f5d12874", "style": "normal", "markDefs": [], "children": [{ "_type": "span", "_key": "ab3f9b39a62e", "text": "My edits", "marks": [] }] }], "_rev": "mi7o2j-ypo-sqd-pi9-4nzkfvmp2", "_updatedAt": "2022-09-07T03:33:02.831Z" }, "historical": { "_id": "drafts.5282fd81-e8ce-4e6a-8b78-3726f3362255", "_type": "article", "_createdAt": "2022-09-07T03:31:45Z", "title": "My New Article", "body": [{ "_type": "block", "_key": "3926f5d12874", "style": "normal", "markDefs": [], "children": [{ "_type": "span", "_key": "ab3f9b39a62e", "text": "My edits", "marks": [] }] }], "_rev": "mi7o2j-ypo-sqd-pi9-4nzkfvmp2", "_updatedAt": "2022-09-07T03:33:02.831Z" }, "published": { "_createdAt": "2022-09-07T03:31:45Z", "_id": "5282fd81-e8ce-4e6a-8b78-3726f3362255", "_rev": "ogNshYaSWBtuB9KID2UMUf", "_type": "article", "_updatedAt": "2022-09-07T03:31:45Z", "title": "My New Article" } }
};

// Since our components are using `@sanity/ui`, we'll
// need to provide the theme manually
// We can create a HoC and reuse across across the tests
function PreviewWithTheme(props) {
  return <ThemeProvider theme={studioTheme}>
    <PreviewComponent {...props} />
  </ThemeProvider>;
}

// Mock the child component file, and grab all props passed to it
// and return a mock element with the test ID
jest.mock("./DraftBanner", () => () => {
  return <mock-draft-banner data-testId={DRAFT_BANNER_TEST_ID} />;
});

test(`When creating a new article, the preview will warn it's a draft`, () => {
  const { getByTestId } = render(
    <PreviewWithTheme document={mockDocument.new} />
  );

  expect(getByTestId(DRAFT_BANNER_TEST_ID)).toBeInTheDocument();
});

test(`When drafting a new article, the preview will warn it's a draft`, () => {
  const { getByTestId } = render(
    <PreviewWithTheme document={mockDocument.draft} />
  );

  expect(getByTestId(DRAFT_BANNER_TEST_ID)).toBeInTheDocument();
});

test(`When an article is published, the preview won't warn it's a draft`, () => {
  const { queryByTestId } = render(
    <PreviewWithTheme document={mockDocument.published} />
  );

  expect(queryByTestId(DRAFT_BANNER_TEST_ID)).toBeNull();
});

test(`When editing a published article, the preview will warn it's a draft`, () => {
  const { getByTestId } = render(
    <PreviewWithTheme document={mockDocument.edited} />
  );

  expect(getByTestId(DRAFT_BANNER_TEST_ID)).toBeInTheDocument();
});