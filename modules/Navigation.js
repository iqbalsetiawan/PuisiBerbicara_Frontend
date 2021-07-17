import {
    Flex,
    Heading,
    Spacer,
    IconButton,
    useMediaQuery,
    HStack,
    Link,
    useDisclosure,
    Box,
    VStack,
    useColorMode,
 } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

function Menu() {
    return (
        <>
            <Link>
                Terbaru
            </Link>
            <Link>
                Puisi
            </Link>
            <Link>
                Tentang Saya
            </Link>
        </>
    );
}

function ColorModeToggler(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton onClick={toggleColorMode} {...props}>
            {colorMode === 'dark' ? (
                <MoonIcon />
            ) : (
                <SunIcon />
            )}
        </IconButton>
    );
}

export default function Navigation() {
    const [isDesktop] = useMediaQuery('(min-width: 600px)')
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { colorMode } = useColorMode();

    const darkMode = 'linear(to-b, gray.900, gray.700)';
    const lightMode = 'linear(to-b, purple.600, purple.600)';
    return (
        <>
            <Flex
                p="10"
                height="52"
                alignItems="flex-start"
                bgGradient={colorMode === 'dark' ? darkMode : lightMode}
            >
                <HStack align="flex-end" width="full" spacing="18">
                    <Heading>
                        Puisi Berbicara
                    </Heading>
                    {
                        isDesktop ? (
                            <>
                                <HStack ml="12" align="flex-end" spacing="6">
                                    <Menu />
                                </HStack>
                                <Spacer />
                                <ColorModeToggler variant="ghost" />
                            </>
                        ) : (
                            <>
                                <Spacer />
                                <IconButton
                                    variant="ghost"
                                    onClick={onOpen}
                                    display={isOpen ? 'none' : 'block'}
                                    icon={
                                        <HamburgerIcon />
                                    }
                                />
                                <Box
                                    display={isOpen ? 'flex' : 'none'}
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    width="100%"
                                    height="100vh"
                                    backgroundColor="gray.800"
                                    opacity="0.8"
                                >
                                    <IconButton
                                        pos="absolute"
                                        top="10"
                                        right="10"
                                        variant="ghost"
                                        onClick={onClose}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <ColorModeToggler
                                        pos="absolute"
                                        variant="ghost"
                                        bottom="10"
                                        left="10"
                                    />
                                    <VStack mt="10" alignItems="flex-start" padding="12" spacing="10">
                                        <Menu />
                                    </VStack>
                                </Box>
                            </>
                        )
                    }
                </HStack>
            </Flex>
            <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: colorMode === 'dark' ? '#2D3748' : '#6B46C1', width: '100%', height: 100, }}
            >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
            </svg>
        </>
    );
}