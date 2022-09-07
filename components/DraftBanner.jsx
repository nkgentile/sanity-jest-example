import React from 'react';
import { Box, Card, Stack, Flex, Badge } from '@sanity/ui';

export default function DraftBanner() {
    return <Box>
        <Card
            paddingBottom={2}
            paddingTop={3}
            paddingX={3}
            radius={1}
            shadow={1}
            tone='caution'
        >
            <Stack space={2}>
                <Flex>
                    <Badge fontSize={1} mode="outline" padding={2} style={{ flexShrink: 0 }}>
                        Working in a draft
                    </Badge>
                </Flex>
            </Stack>
        </Card>
    </Box>;
}