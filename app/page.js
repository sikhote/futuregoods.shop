"use client"

import { Card, Text, Badge, Button, Group, SimpleGrid } from '@mantine/core';
import Image from 'next/image';
import styles from './styles.module.scss';
import feed from 'lib/feed'
import { getPath } from 'lib/images';

export default function Page() {
  return (
    <SimpleGrid {...{ component: 'ul', cols: { base: 1, md: 2 }, spacing: { base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }, className: styles.grid }}>
      {feed.map(({ id, category, product, updated }, index) => (
        <li key={id}>
          <Card shadow="0" padding="lg" radius="md" withBorder>
            <Card.Section {...{ className: styles.imageContainer }}>
              <Image
                priority={index === 0}
                alt={product.name}
                src={getPath(product.id, product.images[0])}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{product.name}</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </li>))}
    </SimpleGrid>
  );
}
