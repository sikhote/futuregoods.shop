'use client';

import { AppShell, Burger, Group, UnstyledButton, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { archivo } from 'lib/fonts';

const items = [
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
];

export default function App({ children }) {
  const isMobile = useMediaQuery('(max-width: 48em)');
  const isCondensed = useMediaQuery('(max-width: 88em)');
  const [opened, { toggle }] = useDisclosure();
  const links = items.map(({ label, href }) => (
    <li key={label} {...{ className: styles.li }}>
      <UnstyledButton
        {...{ href, passHref: true, component: Link, className: styles.link }}
      >
        {label}
      </UnstyledButton>
    </li>
  ));

  return (
    <AppShell
      {...{
        header: { height: isCondensed ? isMobile ? 50 : 60 : 100 },
        navbar: {
          width: 300,
          breakpoint: 'sm',
          collapsed: { desktop: true, mobile: !opened },
        },
        padding: { base: 'xs', md: 'sm', lg: 'md', xl: 'xl' },
        withBorder: false,
      }}
    >
      <AppShell.Header>
        <Group {...{ className: styles.headerGroup }}>
          <Burger
            {...{
              opened: opened,
              onClick: toggle,
              hiddenFrom: 'sm',
              size: 'sm',
            }}
          />
          <Group justify="space-between" style={{ flex: 1 }} >
            <Link {...{ href: '/', className: styles.title }}>
              <Text
                {...{
                  component: 'h1',
                  className: classnames([archivo.className, styles.titleInner]),
                }}
              >
                future goods
              </Text>
            </Link>
            <Group {...{ ml: 'xl', gap: 0, visibleFrom: 'sm', component: 'ul', className: styles.ul }}>{links}</Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <ul {...{ className: styles.ul }}>
          {links}
        </ul>
      </AppShell.Navbar>
      <AppShell.Main {...{ className: styles.main }}>{children}</AppShell.Main>
    </AppShell>
  );
}
