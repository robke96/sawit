'use client';
import React from 'react'
import styles from "./Navbar.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { Box, Burger, Button, Flex, NavLink, Stack, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type NavbarLinkType = {
    href: string,
    label: string,
}[]

const landingPageNav: NavbarLinkType = [
    { href: "#", label: "Log In" },
    { href: "#", label: "Sign Up" },
]

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <Link href="#" className={styles.imageLink}>
        <Image
          src="/images/logonav.webp"
          alt="sawit_logo"
          width={180}
          height={50}
        />
      </Link>

      {/* Desktop Nav Buttons */}
      <Flex className={styles.desktopContainer}>
        {landingPageNav.map((btn) => (
          <Button
            className={`btn ${styles.button}`}
            href={btn.href}
            component={Link}
            key={btn.label}
            variant="default"
            radius="xl"
          >
            {btn.label}
          </Button>
        ))}
      </Flex>

      {/* Hamburger Mobile Button */}
      <Burger
        aria-label="Toggle navigation"
        color="white"
        opened={opened}
        onClick={toggle}
        size="lg"
        className={styles.hamburger}
      />

      {/* Mobile Nav Menu */}
      <Box className={`${styles.mobileContainer} ${opened ? styles.open : null}`}>
        {landingPageNav.map(item => (
          <NavLink className={styles.mobileContainer__item} key={item.label} label={item.label} component={Link} href={item.href} />
        ))}
      </Box>
    </nav>
  );
}

export default Navbar