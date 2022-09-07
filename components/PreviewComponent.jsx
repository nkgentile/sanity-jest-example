
import React from 'react';
import { Stack, Card, Heading } from '@sanity/ui';
import { PortableText } from '@portabletext/react';
import DraftBanner from './DraftBanner';


export default function PreviewComponent({ document }) {
    const { title = 'Untitled', body } = document.displayed;

    return <Stack padding={4} space={[3, 3, 4, 5]}>
        {isDraft(document) && <DraftBanner />}

        <Card>
            <Heading as="h1" size={5}>{title}</Heading>
            <hr />
            <PortableText value={body} />
        </Card>
    </Stack>;

}

function isDraft({ published, displayed }) {
    if (published?._rev == null && displayed?._rev == null) {
        return true;
    }

    return published?._rev !== displayed._rev;
}