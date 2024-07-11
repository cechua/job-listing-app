import { useState } from 'react';
import { Container, Group, Button, Autocomplete } from '@mantine/core';
import classes from './header.module.css';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const links = [
  { link: '/jobs', label: 'Jobs' },
  { link: '/applications', label: 'Applications' },
];

export function Header() {
  //const [opened, { toggle }] = useDisclosure(false);
  // const { toggleColorScheme } = useMantineColorScheme();
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      to={link.link}
      key={link.label}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner} fluid>
        <h1 className={classes.headerStart}>JobsJobsJOBS</h1>
        <Group gap={20} visibleFrom="xs" className={classes.headerCenter}>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<BsSearch />}
            data={[
              'React',
              'Angular',
              'Vue',
              'Next.js',
              'Riot.js',
              'Svelte',
              'Blitz.js',
            ]}
            visibleFrom="xs"
          />
          <Group>{items}</Group>
        </Group>
        <Group justify="center" visibleFrom="xs" className={classes.headerEnd}>
          <Button variant="default" px="xs">
            Log in
          </Button>
          <Button px="xs">Sign up</Button>
          {/* <Button onClick={() => toggleColorScheme()}>Change Theme</Button> */}
        </Group>
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
      </Container>
    </header>
  );
}
